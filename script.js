// Function to fetch country data from the REST Countries API
async function fetchCountries() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  }
  
  // Function to display country data on the page
  function displayCountries(countries) {
    const countriesContainer = document.getElementById('countriesContainer');
    countriesContainer.innerHTML = '';
  
    countries.forEach(country => {
      const countryDiv = document.createElement('div');
      countryDiv.classList.add('country');
      countryDiv.innerHTML = `
        <h2>${country.name.common}</h2>
        <p><strong>Capital:</strong> ${country.capital ?? 'N/A'}</p>
        <p><strong>Population:</strong> ${country.population ?? 'N/A'}</p>
        <p><strong>Region:</strong> ${country.region ?? 'N/A'}</p>
      `;
      countriesContainer.appendChild(countryDiv);
    });
  }
  
  // Function to change the color theme
  function changeTheme() {
    const themeSelect = document.getElementById('theme');
    const theme = themeSelect.value;
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }
  
  // Fetch and display initial country data
  fetchCountries().then(countries => {
    displayCountries(countries);
  });
  