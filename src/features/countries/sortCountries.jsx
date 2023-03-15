export const SortCountries = () => {

  const countries = [
    'Durango',
    'Estado de México',
    'Oaxaca',
    'Nuevo León',
    'Guanajuato',
    'Guerrero',
    'Nayarit',
    'Morelos',
    'Hidalgo',
    'Jalisco',
    'Colima',
    'Aguascalientes',
    'Coahuila',
    'Baja California',
    'Ciudad de México',
    'Campeche',
    'Baja California Sur',
    'Chihuahua',
    'Chiapas',
    'Puebla',
    'Querétaro',
    'Tlaxcala',
    'Tamaulipas',
    'Quintana Roo',
    'San Luis Potosí',
    'Tabasco',
    'Sonora',
    'Sinaloa',
    'Veracruz',
    'Yucatán',
    'Zacatecas'
  ]

  const sortedCountries = countries.sort();

  return(

    <div>

      <label htmlFor="countries">

      Selecciona tu Estado
      <select name="countries" id="countries">
        <option>--Selecciona una opción--</option>
        {sortedCountries.map(country => {
          return(
            <option value={country} key={country}>{country}</option>
          )
        })}
      </select>

      </label>

    </div>

  )

}