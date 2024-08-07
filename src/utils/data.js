export const filterType2 = [
    'Country',
    'State',
    'City',
    'Institution Name',
    'Job Type(i.e. Faculty, Human Resources)',
    'Executive Jobs(i.e. Directors, Registrars)',
    'Administration Support Jobs',
    'Faculty/Department(i.e. Science, Business)',
    'Academic Position Type(i.e. Lecturer, Fellow)',
    // 'Faculty Jobs(i.e. Dentistry, Geography)',
    'Employment Type(i.e. Full-time, casual)',
    'Salary Range in AUD',
    'Onsite/Remote',
    'School Type',
]
export const filterType3 = [
    { type: 'Country', show: false },
    { type: 'State', show: true },
    { type: 'City', show: true },
    { type: 'Institution Name', show: true },
    { type: 'Job Type(i.e. Faculty, Human Resources)', show: true },
    { type: 'Student Focused Support', show: false },
    { type: 'Administration Support Jobs', show: false },
    { type: 'HR Jobs', show: false },
    { type: 'Faculty/Department(i.e. Science, Business)', show: true },
    { type: 'Academic Position Type(i.e. Lecturer, Fellow)', show: true },
    { type: 'Employment Type(i.e. Full-time, casual)', show: true },
    { type: 'Salary Range in AUD', show: true },
    { type: 'Onsite/Remote', show: true },
    { type: 'School Type', show: true },
];
export const filterType = {
    State: true,
    City: true,
    InstitutionName: true,
    JobType: true,
    PositionType: false,
    StudentFocusedSupport: false,
    AdministrationSupportJobs: false,
    AllTeachingJobs: false,
    FacultyDepartmentJobs: false,
    AcademicPositionType: true,
    EmploymentType: true,
    SalaryRange: true,
    OnsiteRemote: true,
    SchoolType: true,
};
export const countryMappings = {
    australia: 'Australia',
    asia: 'Asia',
    africa: 'Africa',
    'new zealand': 'New-Zealand',
    canada: 'Canada',
    europe: 'Europe',
    india: 'India',
    global: 'Global',
    'united states': 'USA',
    'united kingdom': 'UK'
};
export const countryMappings1 = {
    Global: { menu: 'Global', searchLocation: '', hasPic: true },
    Australia: { menu: 'Australia', searchLocation: 'Australia', searchLocation1: 'Australia', hasPic: true },
    Asia: { menu: 'Asia', searchLocation: 'Asia', hasPic: false },
    Africa: { menu: 'Africa', searchLocation: 'Africa', hasPic: false },
    Canada: { menu: 'Canada', searchLocation: 'Canada', hasPic: true },
    Europe: { menu: 'Europe', searchLocation: 'Europe', hasPic: false },
    India: { menu: 'India', searchLocation: 'India', hasPic: true },
    'South-America': { menu: 'South America', searchLocation: 'South America', hasPic: false },
    'Middle-East': { menu: 'Middle East', searchLocation: 'Middle East', hasPic: false },
    'New-Zealand': { menu: 'New Zealand', searchLocation: 'New Zealand', hasPic: true },
    'UK': { menu: 'United Kingdom', searchLocation: 'United Kingdom', hasPic: true },
    'USA': { menu: 'USA', searchLocation: 'United States', searchLocation1: 'USA', hasPic: true },
};
export const regions = [
    'Global',
    'Australia',
    'Asia',
    'Africa',
    'Canada',
    'Europe',
    'India',
    'South America',
    'Middle East',
    'New Zealand',
    'United Kingdom',
    'United States',
]
export const currencies1 = [
    "AUD - Australian dollar",
    "CAD - Canadian dollar",
    "CNH - Chinese renminbi",
    "EUR - Euro",
    "HKD - Hong Kong dollar",
    "JPY - Japanese yen",
    "NZD - New Zealand dollar",
    "GBP - Pound sterling",
    "CHF - Swiss franc",
    "USD - US dollar"
]
export const currencies = [
    "AUD",
    "CAD",
    "CNH",
    "EUR",
    "HKD",
    "JPY",
    "NZD",
    "GBP",
    "CHF",
    "USD"
]
export const countries =
    [
        "",
        "Albania",
        "Åland Islands",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia (Plurinational State of)",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory (the)",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands (the)",
        "Central African Republic (the)",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands (the)",
        "Colombia",
        "Comoros (the)",
        "Congo (the Democratic Republic of the)",
        "Congo (the)",
        "Cook Islands (the)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic (the)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands (the) [Malvinas]",
        "Faroe Islands (the)",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories (the)",
        "Gabon",
        "Gambia (the)",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (the)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (the Democratic People's Republic of)",
        "Korea (the Republic of)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic (the)",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands (the)",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia (Federated States of)",
        "Moldova (the Republic of)",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands (the)",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger (the)",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands (the)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines (the)",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation (the)",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French part)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten (Dutch part)",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan (the)",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan (Province of China)",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands (the)",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (the)",
        "United Kingdom of Great Britain and Northern Ireland (the)",
        "United States Minor Outlying Islands (the)",
        "United States of America (the)",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe"
    ]
