param(
	$csvfile="",
	$jsonfile="" 
)
Add-Type @'
public class Geometry{
	public string type ="Point";
	public string coordinates;
}
public class Props{
	public string caseno;
	public string date;
	public int year;
	public string name;
	public string sex;
	public string race;
	public string age;
	public string track;
	public string type;
	public string location;
	public string impairment;
}
public class Features{
	public string type="Feature";
	public Geometry geometry;
	public Props properties;
}
public class Collection{
	public string type="FeatureCollection";
	public Features[] features;
}
'@
$collection = new-object Collection

Import-csv $csvfile|
	where {$_.coordinates.contains(",")}|
		foreach-object {
			$feature= new-object Features
			$feature.geometry= new-object Geometry
			$feature.geometry.coordinates = "["+$_.coordinates.split(",")[1]+","+$_.coordinates.split(",")[0]+"]";
			
			$feature.properties = new-object Props
			$feature.properties.caseno = $_.case
			$feature.properties.date = $_.date
			$feature.properties.year =$_.year
			$feature.properties.name =$_.name
			$feature.properties.sex = $_.sex
			$feature.properties.race = $_.race
			$feature.properties.age= $_.age
			$feature.properties.track = $_.track
			$feature.properties.type = $_.type
			$feature.properties.location =$_.location
			$feature.properties.impairment = $_.impairment

			$collection.features+=$feature
			
		}

convertto-json $collection -depth 3 | out-file $jsonfile