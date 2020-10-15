const countryCodes = { "FR": "France", "IT": "Italy", "ES": "Spain", "TR": "Turkey", "DE": "Germany", "PL": "Poland", "GB": "United Kingdom", "RU": "Russia", "CZ": "Czech Republic", "PT": "Portugal", "NL": "Netherlands", "BE": "Belgium", "MA": "Morocco", "PH": "Philippines", "US": "United States", "RO": "Romania", "DZ": "Algeria", "NG": "Nigeria", "CH": "Switzerland", "HU": "Hungary", "TH": "Thailand", "SE": "Sweden", "ID": "Indonesia", "IN": "India", "UA": "Ukraine", "MY": "Malaysia", "TN": "Tunisia", "SA": "Saudi Arabia", "GR": "Greece", "CI": "Ivory Coast", "AT": "Austria", "ZA": "South Africa", "KR": "South Korea", "CN": "China", "RS": "Serbia", "JP": "Japan", "EG": "Egypt", "SK": "Slovakia", "SN": "Senegal", "DK": "Denmark", "FI": "Finland", "CM": "Cameroon", "IR": "Iran", "AR": "Argentina", "CA": "Canada", "SG": "Singapore", "PK": "Pakistan", "GH": "Ghana", "LB": "Lebanon", "IE": "Ireland", "AO": "Angola", "NO": "Norway", "BY": "Belarus", "BR": "Brazil", "MX": "Mexico", "CO": "Colombia", "KE": "Kenya", "CL": "Chile", "KW": "Kuwait", "AL": "Albania", "VE": "Venezuela", "RE": "Reunion", "BA": "Bosnia and Herzegovina", "IL": "Israel", "TW": "Taiwan", "SI": "Slovenia", "KZ": "Kazakhstan", "PE": "Peru", "AZ": "Azerbaijan", "AE": "United Arab Emirates", "CY": "Cyprus", "LT": "Lithuania", "DO": "Dominican Republic", "JO": "Jordan", "MD": "Moldova", "BJ": "Benin", "BG": "Bulgaria", "CD": "Democratic Republic of the Congo", "HR": "Croatia", "LV": "Latvia", "HK": "Hong Kong", "MZ": "Mozambique", "AU": "Australia", "LU": "Luxembourg", "UG": "Uganda", "ML": "Mali", "BF": "Burkina Faso", "MU": "Mauritius", "OM": "Oman", "TG": "Togo", "QA": "Qatar", "MK": "Macedonia", "MG": "Madagascar", "VN": "Vietnam", "GA": "Gabon", "EE": "Estonia", "IQ": "Iraq", "MT": "Malta", "BH": "Bahrain", "TZ": "Tanzania", "EC": "Ecuador", "GE": "Georgia", "AM": "Armenia", "SD": "Sudan", "ET": "Ethiopia", "MM": "Myanmar", "ME": "Montenegro", "SY": "Syria", "UZ": "Uzbekistan", "ZW": "Zimbabwe", "DJ": "Djibouti", "LK": "Sri Lanka", "BD": "Bangladesh", "SH": "Saint Helena", "BW": "Botswana", "CV": "Cape Verde", "BO": "Bolivia", "YE": "Yemen", "RW": "Rwanda", "IS": "Iceland", "LY": "Libya", "NE": "Niger", "AD": "Andorra", "GM": "Gambia", "CG": "Republic of the Congo", "ZM": "Zambia", "AF": "Afghanistan", "NA": "Namibia", "MR": "Mauritania", "UY": "Uruguay", "CR": "Costa Rica", "KG": "Kyrgyzstan", "PA": "Panama", "NP": "Nepal", "GN": "Guinea", "GP": "Guadeloupe", "GQ": "Equatorial Guinea", "MQ": "Martinique", "SC": "Seychelles", "CU": "Cuba", "NZ": "New Zealand", "GT": "Guatemala", "MC": "Monaco", "MV": "Maldives", "MW": "Malawi", "SV": "El Salvador", "GF": "French Guiana", "SL": "Sierra Leone", "LR": "Liberia", "NI": "Nicaragua", "KH": "Cambodia", "TJ": "Tajikistan", "PR": "Puerto Rico", "BI": "Burundi", "PY": "Paraguay", "KM": "Comoros", "LS": "Lesotho", "SO": "Somalia", "HN": "Honduras", "TD": "Chad", "GI": "Gibraltar", "BN": "Brunei", "SM": "San Marino", "JE": "Jersey", "SZ": "Swaziland", "TM": "Turkmenistan", "NC": "New Caledonia", "MN": "Mongolia", "LI": "Liechtenstein", "GL": "Greenland", "BT": "Bhutan", "PF": "French Polynesia", "ST": "Sao Tome and Principe", "YT": "Mayotte", "FO": "Faroe Islands", "JM": "Jamaica", "HT": "Haiti", "BS": "Bahamas", "GW": "Guinea-Bissau", "FJ": "Fiji", "GG": "Guernsey", "LA": "Laos", "TL": "East Timor", "TT": "Trinidad and Tobago", "AG": "Antigua and Barbuda", "EH": "Western Sahara", "CF": "Central African Republic", "PW": "Palau", "IM": "Isle of Man", "AW": "Aruba", "BZ": "Belize", "AS": "American Samoa", "AI": "Anguilla", "MP": "Northern Mariana Islands", "BM": "Bermuda", "ER": "Eritrea", "SR": "Suriname", "VG": "British Virgin Islands", "VI": "U.S. Virgin Islands", "GY": "Guyana", "BB": "Barbados", "MH": "Marshall Islands", "MO": "Macao", "PG": "Papua New Guinea", "KY": "Cayman Islands", "KI": "Kiribati", "AN": "Netherlands Antilles", "CK": "Cook Islands", "GU": "Guam", "WF": "Wallis and Futuna", "PS": "Palestine", "TC": "Turks and Caicos Islands", "VU": "Vanuatu", "LC": "Saint Lucia", "TO": "Tonga", "CC": "Cocos Islands", "WS": "Samoa", "GD": "Grenada", "VA": "Vatican", "IO": "British Indian Ocean Territory", "FM": "Micronesia", "NU": "Niue", "BL": "Saint Barthelemy", "KN": "Saint Kitts and Nevis", "PM": "Saint Pierre and Miquelon", "FK": "Falkland Islands", "AQ": "Antarctica", "PN": "Pitcairn", "MF": "Saint Martin", "TV": "Tuvalu", "VC": "Saint Vincent and the Grenadines", "DM": "Dominica", "SB": "Solomon Islands", "TK": "Tokelau", "NF": "Norfolk Island", "CX": "Christmas Island", "NR": "Nauru", "SJ": "Svalbard and Jan Mayen", "MS": "Montserrat", "KP": "North Korea", "GS": "South Georgia And Sandwich Isl.", "BV": "Bouvet Island" }
const autocomplete = { "Afghanistan": "AF", "Albania": "AL", "Algeria": "DZ", "American Samoa": "AS", "Andorra": "AD", "Angola": "AO", "Anguilla": "AI", "Antarctica": "AQ", "Antigua and Barbuda": "AG", "Argentina": "AR", "Armenia": "AM", "Aruba": "AW", "Australia": "AU", "Austria": "AT", "Azerbaijan": "AZ", "Bahamas": "BS", "Bahrain": "BH", "Bangladesh": "BD", "Barbados": "BB", "Belarus": "BY", "Belgium": "BE", "Belize": "BZ", "Benin": "BJ", "Bermuda": "BM", "Bhutan": "BT", "Bolivia": "BO", "Bosnia and Herzegovina": "BA", "Botswana": "BW", "Bouvet Island": "BV", "Brazil": "BR", "British Indian Ocean Territory": "IO", "British Virgin Islands": "VG", "Brunei": "BN", "Bulgaria": "BG", "Burkina Faso": "BF", "Burundi": "BI", "Cambodia": "KH", "Cameroon": "CM", "Canada": "CA", "Cape Verde": "CV", "Cayman Islands": "KY", "Central African Republic": "CF", "Chad": "TD", "Chile": "CL", "China": "CN", "Christmas Island": "CX", "Cocos Islands": "CC", "Colombia": "CO", "Comoros": "KM", "Cook Islands": "CK", "Costa Rica": "CR", "Croatia": "HR", "Cuba": "CU", "Cyprus": "CY", "Czech Republic": "CZ", "Democratic Republic of the Congo": "CD", "Denmark": "DK", "Djibouti": "DJ", "Dominica": "DM", "Dominican Republic": "DO", "East Timor": "TL", "Ecuador": "EC", "Egypt": "EG", "El Salvador": "SV", "Equatorial Guinea": "GQ", "Eritrea": "ER", "Estonia": "EE", "Ethiopia": "ET", "Falkland Islands": "FK", "Faroe Islands": "FO", "Fiji": "FJ", "Finland": "FI", "France": "FR", "French Guiana": "GF", "French Polynesia": "PF", "Gabon": "GA", "Gambia": "GM", "Georgia": "GE", "Germany": "DE", "Ghana": "GH", "Gibraltar": "GI", "Greece": "GR", "Greenland": "GL", "Grenada": "GD", "Guadeloupe": "GP", "Guam": "GU", "Guatemala": "GT", "Guernsey": "GG", "Guinea": "GN", "Guinea-Bissau": "GW", "Guyana": "GY", "Haiti": "HT", "Honduras": "HN", "Hong Kong": "HK", "Hungary": "HU", "Iceland": "IS", "India": "IN", "Indonesia": "ID", "Iran": "IR", "Iraq": "IQ", "Ireland": "IE", "Isle of Man": "IM", "Israel": "IL", "Italy": "IT", "Ivory Coast": "CI", "Jamaica": "JM", "Japan": "JP", "Jersey": "JE", "Jordan": "JO", "Kazakhstan": "KZ", "Kenya": "KE", "Kiribati": "KI", "Kuwait": "KW", "Kyrgyzstan": "KG", "Laos": "LA", "Latvia": "LV", "Lebanon": "LB", "Lesotho": "LS", "Liberia": "LR", "Libya": "LY", "Liechtenstein": "LI", "Lithuania": "LT", "Luxembourg": "LU", "Macao": "MO", "Macedonia": "MK", "Madagascar": "MG", "Malawi": "MW", "Malaysia": "MY", "Maldives": "MV", "Mali": "ML", "Malta": "MT", "Marshall Islands": "MH", "Martinique": "MQ", "Mauritania": "MR", "Mauritius": "MU", "Mayotte": "YT", "Mexico": "MX", "Micronesia": "FM", "Moldova": "MD", "Monaco": "MC", "Mongolia": "MN", "Montenegro": "ME", "Montserrat": "MS", "Morocco": "MA", "Mozambique": "MZ", "Myanmar": "MM", "Namibia": "NA", "Nauru": "NR", "Nepal": "NP", "Netherlands": "NL", "Netherlands Antilles": "AN", "New Caledonia": "NC", "New Zealand": "NZ", "Nicaragua": "NI", "Niger": "NE", "Nigeria": "NG", "Niue": "NU", "Norfolk Island": "NF", "North Korea": "KP", "Northern Mariana Islands": "MP", "Norway": "NO", "Oman": "OM", "Pakistan": "PK", "Palau": "PW", "Palestine": "PS", "Panama": "PA", "Papua New Guinea": "PG", "Paraguay": "PY", "Peru": "PE", "Philippines": "PH", "Pitcairn": "PN", "Poland": "PL", "Portugal": "PT", "Puerto Rico": "PR", "Qatar": "QA", "Republic of the Congo": "CG", "Reunion": "RE", "Romania": "RO", "Russia": "RU", "Rwanda": "RW", "Saint Barthelemy": "BL", "Saint Helena": "SH", "Saint Kitts and Nevis": "KN", "Saint Lucia": "LC", "Saint Martin": "MF", "Saint Pierre and Miquelon": "PM", "Saint Vincent and the Grenadines": "VC", "Samoa": "WS", "San Marino": "SM", "Sao Tome and Principe": "ST", "Saudi Arabia": "SA", "Senegal": "SN", "Serbia": "RS", "Seychelles": "SC", "Sierra Leone": "SL", "Singapore": "SG", "Slovakia": "SK", "Slovenia": "SI", "Solomon Islands": "SB", "Somalia": "SO", "South Africa": "ZA", "South Georgia And Sandwich Isl.": "GS", "South Korea": "KR", "Spain": "ES", "Sri Lanka": "LK", "Sudan": "SD", "Suriname": "SR", "Svalbard and Jan Mayen": "SJ", "Swaziland": "SZ", "Sweden": "SE", "Switzerland": "CH", "Syria": "SY", "Taiwan": "TW", "Tajikistan": "TJ", "Tanzania": "TZ", "Thailand": "TH", "Togo": "TG", "Tokelau": "TK", "Tonga": "TO", "Trinidad and Tobago": "TT", "Tunisia": "TN", "Turkey": "TR", "Turkmenistan": "TM", "Turks and Caicos Islands": "TC", "Tuvalu": "TV", "U.S. Virgin Islands": "VI", "Uganda": "UG", "Ukraine": "UA", "United Arab Emirates": "AE", "United Kingdom": "GB", "United States": "US", "Uruguay": "UY", "Uzbekistan": "UZ", "Vanuatu": "VU", "Vatican": "VA", "Venezuela": "VE", "Vietnam": "VN", "Wallis and Futuna": "WF", "Western Sahara": "EH", "Yemen": "YE", "Zambia": "ZM", "Zimbabwe": "ZW" }

let countryOptions = document.getElementById('countrySelect').options;
Object.entries(autocomplete).forEach(option => {
    if (option[1] == 'US') countryOptions.add(new Option(option[0], option[1], true));
    else countryOptions.add(new Option(option[0], option[1], false));
}
);

document.getElementById("countryCheck").addEventListener("click", function (event) {
    const isLocalized = document.getElementById("countryCheck").checked;
    if (isLocalized) document.getElementById("countrySelect").style.display = "inline-block";
    else document.getElementById("countrySelect").style.display = "none";
});

function percentage(v) {
    return `${(v * 100).toFixed(1)}%`;
}

document.getElementById("nameSubmit").addEventListener("click", async function (event) {
    event.preventDefault();
    const name = document.getElementById("nameField").value;
    const isLocalized = document.getElementById("countryCheck").checked;
    const countryLocalized = document.getElementById("countrySelect").value;
    if (name == "") { //no name
        return;
    }
    document.getElementById("response").style.display = "none";
    const genderUrl = `https://api.genderize.io?name=${name}${(isLocalized ? `&country_id=${countryLocalized}` : "")}`;
    const nationalityUrl = `https://api.nationalize.io?name=${name}`;
    const ageUrl = `https://api.agify.io?name=${name}${(isLocalized ? `&country_id=${countryLocalized}` : "")}`;

    const genderProm = fetch(genderUrl)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            if (json["gender"]) {
                document.getElementById("gender-response").innerHTML = `${json["name"]} has a <strong>${percentage(json["probability"])}</strong> chance of being ${json["gender"]}${(countryCodes[json.country_id] ? ` in ${countryCodes[json.country_id]}.` : ".")}`;
                document.getElementById("gender-panel").className = `jumbotron jumbotron-fluid ${json["gender"]}`;
            }
            else document.getElementById("gender-response").innerHTML = `There are no samples of the name ${json["name"]}${(countryCodes[json.country_id] ? ` in ${countryCodes[json.country_id]}.` : ".")}`;
        });
    const nationalityProm = fetch(nationalityUrl)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            let formattedResponse = "";
            if (json["country"].length) {
                formattedResponse = `${json["name"]} is likely from:<ol>`
                formattedResponse += json["country"].map((country) => {
                    return `<li><strong>${countryCodes[country["country_id"]]}</strong> (${percentage(country["probability"])})</li>`;
                }).join("");
                formattedResponse += "</ol>";
            }
            else formattedResponse = `There are no samples for the name ${json["name"]}.`
            document.getElementById("country-response").innerHTML = formattedResponse;
        });
    const ageProm = fetch(ageUrl)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            if (json["age"]) {
                document.getElementById("age-response").innerHTML = `${json["name"]} is likely <strong>${json["age"]} years old</strong>${(countryCodes[json.country_id] ? ` in ${countryCodes[json.country_id]}.` : ".")}`;
            }
            else document.getElementById("age-response").innerHTML = `There are no samples of the name ${json["name"]}${(countryCodes[json.country_id] ? ` in ${countryCodes[json.country_id]}.` : ".")}`;
        });
    await Promise.all([genderProm, nationalityProm, ageProm]);
    document.getElementById("response").style.display = "block";
});