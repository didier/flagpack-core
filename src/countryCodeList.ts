/**
 * A flag object
 */
export interface IFlagEntry {
  countryName: string
  alpha2: string
  alpha3?: string
  numeric?: string
}

export const countryCodeList: IFlagEntry[] = [
  { countryName: 'Andorra', alpha2: 'AD', alpha3: 'AND', numeric: '020' },
  {
    countryName: 'United Arab Emirates',
    alpha2: 'AE',
    alpha3: 'ARE',
    numeric: '784'
  },
  { countryName: 'African Union', alpha2: 'AFRUN' },
  {
    countryName: 'Antigua and Barbuda',
    alpha2: 'AG',
    alpha3: 'ATG',
    numeric: '028'
  },
  { countryName: 'Anguilla', alpha2: 'AI', alpha3: 'AIA', numeric: '660' },
  { countryName: 'Albania', alpha2: 'AL', alpha3: 'ALB', numeric: '008' },
  { countryName: 'Armenia', alpha2: 'AM', alpha3: 'ARM', numeric: '051' },
  { countryName: 'Amsterdam', alpha2: 'AMS' },
  { countryName: 'Angola', alpha2: 'AO', alpha3: 'AGO', numeric: '024' },
  { countryName: 'Antarctica', alpha2: 'AQ', alpha3: 'ATA', numeric: '010' },
  { countryName: 'Argentina', alpha2: 'AR', alpha3: 'ARG', numeric: '032' },
  {
    countryName: 'American Samoa',
    alpha2: 'AS',
    alpha3: 'ASM',
    numeric: '016'
  },
  { countryName: 'Austria', alpha2: 'AT', alpha3: 'AUT', numeric: '040' },
  { countryName: 'Australia', alpha2: 'AU', alpha3: 'AUS', numeric: '016' },
  { countryName: 'Aruba', alpha2: 'AW', alpha3: 'ABW', numeric: '533' },
  { countryName: 'Åland Islands', alpha2: 'AX', alpha3: 'ALA', numeric: '248' },
  { countryName: 'Azerbaijan', alpha2: 'AZ', alpha3: 'AZE', numeric: '031' },
  {
    countryName: 'Bosnia and Herzegovina',
    alpha2: 'BA',
    alpha3: 'BIH',
    numeric: '070'
  },
  { countryName: 'Barbados', alpha2: 'BB', alpha3: 'BRB', numeric: '052' },
  { countryName: 'Bangladesh', alpha2: 'BD', alpha3: 'BGD', numeric: '050' },
  { countryName: 'Belgium', alpha2: 'BE', alpha3: 'BEL', numeric: '056' },
  { countryName: 'Burkina Faso', alpha2: 'BF', alpha3: 'BFA', numeric: '854' },
  { countryName: 'Bulgaria', alpha2: 'BG', alpha3: 'BGR', numeric: '100' },
  { countryName: 'Bahrain', alpha2: 'BH', alpha3: 'BHR', numeric: '048' },
  { countryName: 'Burundi', alpha2: 'BI', alpha3: 'BDI', numeric: '108' },
  { countryName: 'Benin', alpha2: 'BJ', alpha3: 'BEN', numeric: '204' },
  {
    countryName: 'Saint Barthélemy',
    alpha2: 'BL',
    alpha3: 'BLM',
    numeric: '652'
  },
  { countryName: 'Bermuda', alpha2: 'BM', alpha3: 'BMU', numeric: '060' },
  { countryName: 'Brunei', alpha2: 'BN', alpha3: 'BRN', numeric: '096' },
  { countryName: 'Bolivia', alpha2: 'BO', alpha3: 'BOL', numeric: '068' },
  { countryName: 'Bonaire', alpha2: 'BQ-BO' },
  { countryName: 'Saba', alpha2: 'BQ-SA' },
  { countryName: 'Sint Eustatius', alpha2: 'BQ-SE' },
  { countryName: 'Brazil', alpha2: 'BR', alpha3: 'BRA', numeric: '076' },
  { countryName: 'Bahamas', alpha2: 'BS', alpha3: 'BHS', numeric: '044' },
  { countryName: 'Bhutan', alpha2: 'BT', alpha3: 'BTN', numeric: '064' },
  { countryName: 'Botswana', alpha2: 'BW', alpha3: 'BWA', numeric: '072' },
  { countryName: 'Belarus', alpha2: 'BY', alpha3: 'BLR', numeric: '112' },
  { countryName: 'Belize', alpha2: 'BZ', alpha3: 'BLZ', numeric: '084' },
  { countryName: 'Canada', alpha2: 'CA', alpha3: 'CAN', numeric: '124' },
  { countryName: 'Cocos Islands', alpha2: 'CC', alpha3: 'CCK', numeric: '166' },
  {
    countryName: 'Democratis Republic of Congo',
    alpha2: 'CD',
    alpha3: 'COD',
    numeric: '180'
  },
  {
    countryName: 'Central African Republic',
    alpha2: 'CF',
    alpha3: 'CAF',
    numeric: '140'
  },
  { countryName: 'Congo', alpha2: 'CG', alpha3: 'COG', numeric: '178' },
  { countryName: 'Switzerland', alpha2: 'CH', alpha3: 'CHE', numeric: '756' },
  { countryName: "Côte d'Ivoire", alpha2: 'CI', alpha3: 'CIV', numeric: '384' },
  { countryName: 'Cook Island', alpha2: 'CK', alpha3: 'COK', numeric: '184' },
  { countryName: 'Chile', alpha2: 'CL', alpha3: 'CHL', numeric: '152' },
  { countryName: 'Cameroon', alpha2: 'CM', alpha3: 'CMR', numeric: '120' },
  { countryName: 'China', alpha2: 'CN', alpha3: 'CHN', numeric: '156' },
  { countryName: 'Colombia', alpha2: 'CO', alpha3: 'COL', numeric: '170' },
  { countryName: 'Costa Rica', alpha2: 'CR', alpha3: 'CRI', numeric: '188' },
  { countryName: 'Cuba', alpha2: 'CU', alpha3: 'CUB', numeric: '192' },
  { countryName: 'Cape Verde', alpha2: 'CV', alpha3: 'CPV', numeric: '132' },
  { countryName: 'Curaçao', alpha2: 'CW', alpha3: 'CUW', numeric: '531' },
  {
    countryName: 'Christmas Island',
    alpha2: 'CX',
    alpha3: 'CXR',
    numeric: '162'
  },
  { countryName: 'Cyprus', alpha2: 'CY', alpha3: 'CYP', numeric: '196' },
  {
    countryName: 'Czech Republic',
    alpha2: 'CZ',
    alpha3: 'CZE',
    numeric: '203'
  },
  { countryName: 'Germany', alpha2: 'DE', alpha3: 'DEU', numeric: '276' },
  { countryName: 'Djibouti', alpha2: 'DJ', alpha3: 'DJI', numeric: '262' },
  { countryName: 'Denmark', alpha2: 'DK', alpha3: 'DNK', numeric: '208' },
  { countryName: 'Dominica', alpha2: 'DM', alpha3: 'DMA', numeric: '212' },
  {
    countryName: 'Dominican Republic',
    alpha2: 'DO',
    alpha3: 'DOM',
    numeric: '214'
  },
  { countryName: 'Ecuador', alpha2: 'EC', alpha3: 'ECU', numeric: '218' },
  { countryName: 'Estonia', alpha2: 'EE', alpha3: 'EST', numeric: '233' },
  { countryName: 'Egypt', alpha2: 'EG', alpha3: 'EGY', numeric: '818' },
  {
    countryName: 'Western Sahara',
    alpha2: 'EH',
    alpha3: 'ESH',
    numeric: '732'
  },
  { countryName: 'Eritrea', alpha2: 'ER', alpha3: 'ERI', numeric: '232' },
  { countryName: 'Spain', alpha2: 'ES', alpha3: 'ESP', numeric: '724' },
  { countryName: 'Ethiopia', alpha2: 'ET', alpha3: 'ETH', numeric: '231' },
  { countryName: 'European Union', alpha2: 'EU' },
  { countryName: 'Finland', alpha2: 'FI', alpha3: 'FIN', numeric: '246' },
  { countryName: 'Fiji', alpha2: 'FJ', alpha3: 'FJI', numeric: '242' },
  {
    countryName: 'Falkland Islands',
    alpha2: 'FK',
    alpha3: 'FLK',
    numeric: '238'
  },
  {
    countryName: 'Micronesia (Federated States of)',
    alpha2: 'FM',
    alpha3: 'FSM',
    numeric: '583'
  },
  { countryName: 'Faroe Island', alpha2: 'FO', alpha3: 'FRO', numeric: '234' },
  { countryName: 'France', alpha2: 'FR', alpha3: 'FRA', numeric: '250' },
  { countryName: 'Gabon', alpha2: 'GA', alpha3: 'GAB', numeric: '266' },
  { countryName: 'England', alpha2: 'GB-ENG' },
  { countryName: 'Scotland', alpha2: 'GB-SCT' },
  {
    countryName: 'United Kingdom',
    alpha2: 'GB-UKM',
    alpha3: 'GBR',
    numeric: '836'
  },
  { countryName: 'Wales', alpha2: 'GB-WLS' },
  { countryName: 'Northern Ireland', alpha2: 'GB-NIR' },
  { countryName: 'Grenada', alpha2: 'GD', alpha3: 'GRD', numeric: '308' },
  { countryName: 'Georgia', alpha2: 'GE', alpha3: 'GEO', numeric: '268' },
  { countryName: 'French Guiana', alpha2: 'GF', alpha3: 'GUF', numeric: '254' },
  { countryName: 'Guernsey', alpha2: 'GG', alpha3: 'GGY', numeric: '831' },
  { countryName: 'Ghana', alpha2: 'GH', alpha3: 'GHA', numeric: '288' },
  { countryName: 'Gibraltar', alpha2: 'GI', alpha3: 'GIB', numeric: '292' },
  { countryName: 'Greenland', alpha2: 'GL', alpha3: 'GRL', numeric: '304' },
  { countryName: 'Gambia', alpha2: 'GM', alpha3: 'GMB', numeric: '270' },
  { countryName: 'Guinea', alpha2: 'GN', alpha3: 'GIN', numeric: '324' },
  { countryName: 'Guadeloupe', alpha2: 'GP', alpha3: 'GLP', numeric: '312' },
  {
    countryName: 'Equatorial Guinea',
    alpha2: 'GQ',
    alpha3: 'GNQ',
    numeric: '226'
  },
  { countryName: 'Greece', alpha2: 'GR', alpha3: 'GRC', numeric: '300' },
  {
    countryName: 'South Gerogia and the South Sandwich Islands',
    alpha2: 'GS',
    alpha3: 'SGS',
    numeric: '239'
  },
  { countryName: 'Guatemala', alpha2: 'GT', alpha3: 'GTM', numeric: '320' },
  { countryName: 'Guam', alpha2: 'GU', alpha3: 'GUM', numeric: '316' },
  { countryName: 'Guinea-Bissau', alpha2: 'GW', alpha3: 'GNB', numeric: '624' },
  { countryName: 'Guyana', alpha2: 'GY', alpha3: 'GUY', numeric: '328' },
  { countryName: 'Hong Kong', alpha2: 'HK', alpha3: 'HKG', numeric: '344' },
  {
    countryName: 'Heard Island and McDonald Islands',
    alpha2: 'HM',
    alpha3: 'HMD',
    numeric: '334'
  },
  { countryName: 'Honduras', alpha2: 'HN', alpha3: 'HND', numeric: '340' },
  { countryName: 'Croatia', alpha2: 'HR', alpha3: 'HRV', numeric: '191' },
  { countryName: 'Haiti', alpha2: 'HT', alpha3: 'HTI', numeric: '332' },
  { countryName: 'Hungary', alpha2: 'HU', alpha3: 'HUN', numeric: '348' },
  { countryName: 'Indonesia', alpha2: 'ID', alpha3: 'IDN', numeric: '360' },
  { countryName: 'Ireland', alpha2: 'IE', alpha3: 'IRL', numeric: '372' },
  { countryName: 'Israel', alpha2: 'IL', alpha3: 'ISR', numeric: '376' },
  { countryName: 'Isle of Man', alpha2: 'IM', alpha3: 'IMN', numeric: '833' },
  { countryName: 'India', alpha2: 'IN', alpha3: 'IND', numeric: '356' },
  {
    countryName: 'British Indian Ocean Territory',
    alpha2: 'IO',
    alpha3: 'IOT',
    numeric: '086'
  },
  { countryName: 'Iraq', alpha2: 'IQ', alpha3: 'IRQ', numeric: '368' },
  { countryName: 'Iran', alpha2: 'IR', alpha3: 'IRN', numeric: '364' },
  { countryName: 'Iceland', alpha2: 'IS', alpha3: 'ISL', numeric: '352' },
  { countryName: 'Italy', alpha2: 'IT', alpha3: 'ITA', numeric: '380' },
  { countryName: 'Jersey', alpha2: 'JE', alpha3: 'JEY', numeric: '832' },
  { countryName: 'Jamaica', alpha2: 'JM', alpha3: 'JAM', numeric: '388' },
  { countryName: 'Jordan', alpha2: 'JO', alpha3: 'JOR', numeric: '400' },
  { countryName: 'Japan', alpha2: 'JP', alpha3: 'JPN', numeric: '392' },
  { countryName: 'Kenya', alpha2: 'KE', alpha3: 'KEN', numeric: '404' },
  { countryName: 'Kyrgyzstan', alpha2: 'KG', alpha3: 'KGZ', numeric: '417' },
  { countryName: 'Cambodia', alpha2: 'KH', alpha3: 'KHM', numeric: '116' },
  { countryName: 'Kiribati', alpha2: 'KI', alpha3: 'KIR', numeric: '296' },
  { countryName: 'Comoros', alpha2: 'KM', alpha3: 'COM', numeric: '174' },
  {
    countryName: 'Saint Kitts and Nevis',
    alpha2: 'KN-SK',
    alpha3: 'KNA',
    numeric: '659'
  },
  {
    countryName: "Korea (the Democratic People's Republic of)",
    alpha2: 'KP',
    alpha3: 'PRK',
    numeric: '408'
  },
  {
    countryName: 'Korea (the Republic of)',
    alpha2: 'KR',
    alpha3: 'KOR',
    numeric: '410'
  },
  { countryName: 'Kuwait', alpha2: 'KW', alpha3: 'KWT', numeric: '414' },
  {
    countryName: 'Cayman Islands',
    alpha2: 'KY',
    alpha3: 'CYM',
    numeric: '136'
  },
  { countryName: 'Kazakhstan', alpha2: 'KZ', alpha3: 'KAZ', numeric: '398' },
  {
    countryName: "Lao People's Democratic Republic (the)",
    alpha2: 'LA',
    alpha3: 'LAO',
    numeric: '418'
  },
  { countryName: 'Lebanon', alpha2: 'LB', alpha3: 'LBN', numeric: '422' },
  { countryName: 'Saint Lucia', alpha2: 'LC', alpha3: 'LCA', numeric: '662' },
  { countryName: 'Liechtenstein', alpha2: 'LI', alpha3: 'LIE', numeric: '438' },
  { countryName: 'Sri Lanka', alpha2: 'LK', alpha3: 'LKA', numeric: '144' },
  { countryName: 'Liberia', alpha2: 'LR', alpha3: 'LBR', numeric: '430' },
  { countryName: 'Lesotho', alpha2: 'LS', alpha3: 'LSO', numeric: '426' },
  { countryName: 'Lithuania', alpha2: 'LT', alpha3: 'LTU', numeric: '440' },
  { countryName: 'Luxembourg', alpha2: 'LU', alpha3: 'LUX', numeric: '442' },
  { countryName: 'Latvia', alpha2: 'LV', alpha3: 'LVA', numeric: '428' },
  { countryName: 'Libya', alpha2: 'LY', alpha3: 'LBY', numeric: '434' },
  { countryName: 'Morocco', alpha2: 'MA', alpha3: 'MAR', numeric: '504' },
  { countryName: 'Monaco', alpha2: 'MC', alpha3: 'MCO ', numeric: '492' },
  {
    countryName: 'Moldova (the Republic of)',
    alpha2: 'MD',
    alpha3: 'MDA',
    numeric: '498'
  },
  { countryName: 'Montenegro', alpha2: 'ME', alpha3: 'MNE', numeric: '499' },
  { countryName: 'Saint Martin', alpha2: 'MF', alpha3: 'MAF', numeric: '663' },
  { countryName: 'Madagascar', alpha2: 'MG', alpha3: 'MDG', numeric: '450' },
  {
    countryName: 'Marshall Islands (the)',
    alpha2: 'MH',
    alpha3: 'MHL',
    numeric: '584'
  },
  {
    countryName: 'North Macedonia',
    alpha2: 'MK',
    alpha3: 'MKD',
    numeric: '807'
  },
  { countryName: 'Mali', alpha2: 'ML', alpha3: 'MLI', numeric: '466' },
  { countryName: 'Myanmar', alpha2: 'MM', alpha3: 'MMR', numeric: '104' },
  { countryName: 'Mongolia', alpha2: 'MN', alpha3: 'MNG', numeric: '496' },
  { countryName: 'Macao', alpha2: 'MO', alpha3: 'MAC', numeric: '446' },
  {
    countryName: 'Northern Mariana Islands (the)',
    alpha2: 'MP',
    alpha3: 'MNP',
    numeric: '580'
  },
  { countryName: 'Martinique', alpha2: 'MQ', alpha3: 'MTQ', numeric: '474' },
  { countryName: 'Mauritania', alpha2: 'MR', alpha3: 'MRT', numeric: '478' },
  { countryName: 'Montserrat', alpha2: 'MS', alpha3: 'MSR', numeric: '500' },
  { countryName: 'Malta', alpha2: 'MT', alpha3: 'MLT', numeric: '470' },
  { countryName: 'Mauritius', alpha2: 'MU', alpha3: 'MUS', numeric: '480' },
  { countryName: 'Maldives', alpha2: 'MV', alpha3: 'MDV', numeric: '462' },
  { countryName: 'Malawi', alpha2: 'MW', alpha3: 'MWI', numeric: '454' },
  { countryName: 'Mexico', alpha2: 'MX', alpha3: 'MEX', numeric: '484' },
  { countryName: 'Malaysia', alpha2: 'MY', alpha3: 'MYS', numeric: '458' },
  { countryName: 'Mozambique', alpha2: 'MZ', alpha3: 'MOZ', numeric: '508' },
  { countryName: 'Namibia', alpha2: 'NA', alpha3: 'NAM', numeric: '516' },
  { countryName: 'New Caledonia', alpha2: 'NC', alpha3: 'NCL', numeric: '540' },
  { countryName: 'Niger', alpha2: 'NE', alpha3: 'NER', numeric: '562' },
  {
    countryName: 'Norfolk Island',
    alpha2: 'NF',
    alpha3: 'NFK',
    numeric: '574'
  },
  { countryName: 'Nigeria', alpha2: 'NG', alpha3: 'NGA', numeric: '566' },
  { countryName: 'Nicaragua', alpha2: 'NI', alpha3: 'NIC', numeric: '558' },
  { countryName: 'Netherlands', alpha2: 'NL', alpha3: 'NLD', numeric: '528' },
  { countryName: 'Norway', alpha2: 'NO', alpha3: 'NOR', numeric: '578' },
  { countryName: 'Nepal', alpha2: 'NP', alpha3: 'NPL', numeric: '524' },
  { countryName: 'Nauru', alpha2: 'NR', alpha3: 'NRU', numeric: '520' },
  { countryName: 'Niue', alpha2: 'NU', alpha3: 'NIU', numeric: '570' },
  { countryName: 'New Zealand', alpha2: 'NZ', alpha3: 'NZL', numeric: '554' },
  { countryName: 'Oman', alpha2: 'OM', alpha3: 'OMN', numeric: '512' },
  { countryName: 'Panama', alpha2: 'PA', alpha3: 'PAN', numeric: '591' },
  { countryName: 'Peru', alpha2: 'PE', alpha3: 'PER', numeric: '604' },
  {
    countryName: 'French Polyesia',
    alpha2: 'PF',
    alpha3: 'PYF',
    numeric: '258'
  },
  {
    countryName: 'Papua New Guinea',
    alpha2: 'PG',
    alpha3: 'PNG',
    numeric: '598'
  },
  {
    countryName: 'Phillippines (the)',
    alpha2: 'PH',
    alpha3: 'PHL',
    numeric: '608'
  },
  { countryName: 'Pakistan', alpha2: 'PK', alpha3: 'PAK', numeric: '586' },
  { countryName: 'Poland', alpha2: 'PL', alpha3: 'POL', numeric: '616' },
  {
    countryName: 'Saint Pierre and Miquelon',
    alpha2: 'PM',
    alpha3: 'SPM',
    numeric: '666'
  },
  { countryName: 'Pitcairn', alpha2: 'PN', alpha3: 'PCN', numeric: '612' },
  { countryName: 'Puerto Rico', alpha2: 'PR', alpha3: 'PRI', numeric: '630' },
  {
    countryName: 'Palestine, State of',
    alpha2: 'PS',
    alpha3: 'PSE',
    numeric: '275'
  },
  { countryName: 'Portugal', alpha2: 'PT', alpha3: 'PRT', numeric: '620' },
  { countryName: 'Palau', alpha2: 'PW', alpha3: 'PLW', numeric: '585' },
  { countryName: 'Paraguay', alpha2: 'PY', alpha3: 'PRY', numeric: '600' },
  { countryName: 'Qatar', alpha2: 'QA', alpha3: 'QAT', numeric: '634' },
  { countryName: 'Rainbow', alpha2: 'RAINBOW' },
  { countryName: 'Réunion', alpha2: 'RE', alpha3: 'REU', numeric: '638' },
  { countryName: 'Romania', alpha2: 'RO', alpha3: 'ROU', numeric: '642' },
  { countryName: 'Serbia', alpha2: 'RS', alpha3: 'SRB', numeric: '688' },
  {
    countryName: 'Russian Federation (the)',
    alpha2: 'RU',
    alpha3: 'RUS',
    numeric: '643'
  },
  { countryName: 'Rwanda', alpha2: 'RW', alpha3: 'RWA', numeric: '646' },
  { countryName: 'Saudi Arabia', alpha2: 'SA', alpha3: 'SAU', numeric: '682' },
  {
    countryName: 'Solomon Islands',
    alpha2: 'SB',
    alpha3: 'SLB',
    numeric: '090'
  },
  { countryName: 'Seychelles', alpha2: 'SC', alpha3: 'SYC', numeric: '690' },
  { countryName: 'Sudan (the)', alpha2: 'SD', alpha3: 'SDN', numeric: '729' },
  { countryName: 'Sweden', alpha2: 'SE', alpha3: 'SWE', numeric: '752' },
  { countryName: 'Singapore', alpha2: 'SG', alpha3: 'SGP', numeric: '702' },
  {
    countryName: 'Saint Helena, Ascension Island, Traistan da Cunha',
    alpha2: 'SH',
    alpha3: 'SHN',
    numeric: '654'
  },
  { countryName: 'Slovenia', alpha2: 'SI', alpha3: 'SVN', numeric: '705' },
  {
    countryName: 'Svalbard, Jan Mayen',
    alpha2: 'SJ',
    alpha3: 'SJM',
    numeric: '744'
  },
  { countryName: 'Slovakia', alpha2: 'SK', alpha3: 'SVK', numeric: '703' },
  { countryName: 'Sierra Leone', alpha2: 'SL', alpha3: 'SLE', numeric: '694' },
  { countryName: 'San Marino', alpha2: 'SM', alpha3: 'SMR', numeric: '674' },
  { countryName: 'Senegal', alpha2: 'SN', alpha3: 'SEN', numeric: '686' },
  { countryName: 'Somalia', alpha2: 'SO', alpha3: 'SOM', numeric: '706' },
  { countryName: 'Suriname', alpha2: 'SR', alpha3: 'SUR', numeric: '740' },
  { countryName: 'South Sudan', alpha2: 'SS', alpha3: 'SSD', numeric: '728' },
  {
    countryName: 'Sao Tome and Principe',
    alpha2: 'ST',
    alpha3: 'STP',
    numeric: '678'
  },
  { countryName: 'El Salvador', alpha2: 'SV', alpha3: 'SLV', numeric: '222' },
  { countryName: 'Sint Maarten', alpha2: 'SX', alpha3: 'SXM', numeric: '534' },
  {
    countryName: 'Syrian Arab Republic (the)',
    alpha2: 'SY',
    alpha3: 'SYR',
    numeric: '760'
  },
  { countryName: 'Eswatini', alpha2: 'SZ', alpha3: 'SWZ', numeric: '748' },
  {
    countryName: 'Turks and Caicos Islands (the)',
    alpha2: 'TC',
    alpha3: 'TCA',
    numeric: '796'
  },
  { countryName: 'Chad', alpha2: 'TD', alpha3: 'TCD', numeric: '148' },
  {
    countryName: 'French Southern Territories',
    alpha2: 'TF',
    alpha3: 'ATF',
    numeric: '260'
  },
  { countryName: 'Togo', alpha2: 'TG', alpha3: 'TGO', numeric: '768' },
  { countryName: 'Thailand', alpha2: 'TH', alpha3: 'THA', numeric: '764' },
  { countryName: 'Tajikistan', alpha2: 'TJ', alpha3: 'TJK', numeric: '762' },
  { countryName: 'Tokelau', alpha2: 'TK', alpha3: 'TKL', numeric: '772' },
  { countryName: 'Timor-Leste', alpha2: 'TL', alpha3: 'TLS', numeric: '626' },
  { countryName: 'Turkmenistan', alpha2: 'TM', alpha3: 'TKM', numeric: '795' },
  { countryName: 'Tunisia', alpha2: 'TN', alpha3: 'TUN', numeric: '788' },
  { countryName: 'Tonga', alpha2: 'TO', alpha3: 'TON', numeric: '776' },
  { countryName: 'Turkey', alpha2: 'TR', alpha3: 'TUR', numeric: '792' },
  {
    countryName: 'Trinidad and Tobago',
    alpha2: 'TT',
    alpha3: 'TTO',
    numeric: '780'
  },
  { countryName: 'Tuvalu', alpha2: 'TV', alpha3: 'TUV', numeric: '798' },
  { countryName: 'Taiwan', alpha2: 'TW', alpha3: 'TWN', numeric: '158' },
  {
    countryName: 'Tanzania, the United Republic of',
    alpha2: 'TZ',
    alpha3: 'TZA',
    numeric: '834'
  },
  { countryName: 'Ukraine', alpha2: 'UA', alpha3: 'UKR', numeric: '804' },
  { countryName: 'Uganda', alpha2: 'UG', alpha3: 'UGA', numeric: '800' },
  {
    countryName: 'United States Minor Outlying Islands (the)',
    alpha2: 'UM',
    alpha3: 'UMI',
    numeric: '581'
  },
  { countryName: 'Union of South American Nations', alpha2: 'UNASUR' },
  {
    countryName: 'United States of America',
    alpha2: 'US',
    alpha3: 'USA',
    numeric: '840'
  },
  { countryName: 'Uruguay', alpha2: 'UY', alpha3: 'URY', numeric: '858' },
  { countryName: 'Uzbekistan', alpha2: 'UZ', alpha3: 'UZB', numeric: '860' },
  { countryName: 'Holy See', alpha2: 'VA', alpha3: 'VAT', numeric: '336' },
  {
    countryName: 'Saint Vincent and the Grenadines',
    alpha2: 'VC',
    alpha3: 'VCT',
    numeric: '670'
  },
  {
    countryName: 'Venezuela (Bolivarian Republic of)',
    alpha2: 'VE',
    alpha3: 'VEN',
    numeric: '862'
  },
  {
    countryName: 'Virgin Islands (British)',
    alpha2: 'VG',
    alpha3: 'VGB',
    numeric: '092'
  },
  {
    countryName: 'Virgin Islands (U.S.)',
    alpha2: 'VI',
    alpha3: 'VIR',
    numeric: '850'
  },
  { countryName: 'Vietnam', alpha2: 'VN', alpha3: 'VNM', numeric: '704' },
  { countryName: 'Vanuatu', alpha2: 'VU', alpha3: 'VUT', numeric: '548' },
  {
    countryName: 'Wallis and Futuna',
    alpha2: 'WF',
    alpha3: 'WLF',
    numeric: '876'
  },
  { countryName: 'Samoa', alpha2: 'WS', alpha3: 'WSM', numeric: '882' },
  { countryName: 'Yemen', alpha2: 'YE', alpha3: 'YEM', numeric: '887' },
  { countryName: 'South Africa', alpha2: 'ZA', alpha3: 'ZAF', numeric: '710' },
  { countryName: 'Zambia', alpha2: 'ZM', alpha3: 'ZMB', numeric: '894' },
  { countryName: 'Zimbabwe', alpha2: 'ZW', alpha3: 'ZWE', numeric: '716' },
  { countryName: 'Afghanistan', alpha2: 'AF', alpha3: 'AFG', numeric: '004' },
  { countryName: 'Bouvet Island', alpha2: 'BV', alpha3: 'BVT', numeric: '074' }
]
