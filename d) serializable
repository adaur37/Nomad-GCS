import kotlinx.serialization.Serializable

//The data class "Person" represents an individual with three properties; name, favorite flavor, and the year they were born in
//'favoriteFlavor' property is of type 'Falvor', which has an enum class declaration within the Person data class
@Serializable
data class Person(val name: String, val favoriteFlavor: Flavor, val birthYear: Int) 
{
    @Serializable
    enum class Flavor 
    {
        VANILLA,
        CHOCOLATE,
        STRAWBERRY,
        MINT_CHIP,
        COOKIE_DOUGH
    }
}
