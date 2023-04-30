function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

function autofill_select_options(inp, providers_arr){
  providers_arr.forEach(streetsFill);

 
  function streetsFill(item, index) {
      if(index === 0){
          $(inp).empty();
      }
      $(inp).append('<option value="'+ item +'">'+ item +'</option>');
  }
}

/*An array containing all the country names in the world:*/
var cities = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","SouthTennessee","TexaUtah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];


/*initiate the autocomplete function on the "myInput" element, and pass along the cities array as possible autocomplete values:*/
autocomplete(document.getElementById("city"), cities);

let providers = [];
document.addEventListener("click", function(e) {
  if(document.getElementById("city").value == "Alabama"){
    providers = ["Alabama Municipal Electric Authority","Albertville Municipal Utilities Board","Arab Electric Cooperative, Inc.","Alabama Power, a part of the Southern Company","Athens Utilities, Athens, Limestone County","Cherokee Electric Cooperative","Cullman Electric Cooperative, Cullman city and county, Touchstone Energy","Utilities Board of the City of Cullman","Decatur Utilities, Municipal Utilities Board of Decatur, Morgan County, Alabama","Florence Utilities, City of Florence, Lauderdale County","Franklin Electric Cooperatives, Franklin, Colbert and Lawrence Counties in northwest Alabama","Guntersville Electric Board","Huntsville UtilitiesCity of Huntsville, Madison County","Joe Wheeler Electric Member Cooperative – Morgan, Lawrence counties, part of Touchstone Energy Cooperatives","Marshall-DeKalb Electric Cooperative","PowerSouth","Sand Mountain Electric Cooperative DeKalb, Jackson, Marshall and Cherokee counties","Scottsboro Electric Power Board","Tennessee Valley Authority","Tombigbee Electric Cooperative HQ and service in Hamilton, and Marion County Alabama, with service also in Mississippi","Wiregrass Electric Cooperative"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Alaska"){
    providers = ["Alaska Electric Light & Power","MHI ELECTRIC DISTRIBUTION","Copper Valley Electric Association","Golden Valley Electric Association","Kodiak Electric Association","Municipal Light & Power"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Arizona"){
    providers = ["Arizona Public Service","Salt River Project","Tucson Electric Power","UniSource Energy Services","Page Power and Water"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Arkansas"){
    providers = ["Southwestern Electric Power Company","Entergy Arkansas, Inc.","Associated Electrical Cooperative Incorporated"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "California"){
    providers = ["Alameda Municipal Power","Anaheim Public Utilities","Azusa Light & Water","Burbank Water & Power","Direct Energy","East Bay Municipal Utility District","Glendale Public Service Department","Gridley Municipal Utilities","Healdsburg Municipal Electric Department","Imperial Irrigation District","Island Energy","Modesto Irrigation District","Los Angeles Department of Water and Power","MAD DEAN ELECTRIC COMPANY","O'Brien Cogeneration","Pacific Gas and Electric","Pasadena Water & Power","PacifiCorp (Pacific Power)","Riverside Public Utilities","Sacramento Municipal Utility District","San Diego Gas & Electric","San Francisco Public Utilities Commission","Santa Clara Electric Department","Sierra-Pacific Power","Southern California Edison","Southern California Public Power Authority","TID Water & Power - Turlock Irrigation District"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Colorado"){
    providers = ["Public Service Company of Colorado, a subsidiary of Xcel Energy","Intermountain Rural Electrical Association","Colorado Springs Utilities","Platte River Power Authority","United Power, Inc.","Tri-State Generation and Transmission Association (A cooperative of Touchstone )","Poudre Valley Rual Electric Association (Cooperative of Touchstone Energy)","La Plata Electric Association (A cooperative of Touchstone Energy)","Western Area Power Administration","City of Fountain Electric"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Connecticut"){
    providers = ["AVANGRID (The United Illuminating Company)","Direct Energy","Connecticut Light and Power (Eversource Energy)","Northeast Utilities"];   
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Delaware"){
    providers = ["Ambit Energy","City of Dover Electric Department","City of Milford Electric Department","City of Newark Electric Department","WAPDA","City of Seaford Electric Department","Delaware Electric Cooperative","Delaware Municipal Electric Corporation","Delmarva Power, a subsidiary of Exelon","Lewes Board of Public Works","Municipal Services Commission of the City of New Castle","Town of Clayton Electric Department","Town of Middletown Electric Department","Town of Smyrna Electric Department","Direct Energy"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "District of Columbia"){
    providers = ["PEPCO, a subsidiary of Exelon","Direct Energy"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Florida"){
    providers = ["Beaches Energy Services","Central Florida Electric Cooperative","Choctawhatchee Electric Cooperative","City of Alachua Public Services Department","City of Bartow Electric Department","City of Blountstown Electric Department","City of Bushnell Utilities Department","City of Chattahoochee Electric Department","City of Fort Meade Utilities Department","City of Green Cove Springs Utilities Department","City of Lake Worth Utilities Department","City of Moore Haven Utilities Department","City of Mount Dora Electric Utility","City of New Smyrna Beach Utilities Commission","City of Newberry Electric Utility","City of Quincy Utilities Department","City of Starke Utilities Department","City of Tallahassee Utilities","City of Vero Beach Electric Utilities","City of Wachula Utilities","City of Williston Utilities Department","City of Winter Park Electric Utility Department","Clay Electric Cooperative","Clewiston Utilities","Duke Energy Florida, a part of Duke Energy","Escambia River Electric Cooperative","Florida Keys Electric Cooperative","Florida Municipal Power Agency","Florida Power & Light, a part of NextEra Energy","Florida Public Utilities, a part of Chesapeake Utilities","Fort Pierce Utilities Authority","Gainesville Regional Utilities","Glades Electric Cooperative","Gulf Coast Electric Cooperative","Gulf Power Company, a part of NextEra Energy","Homestead Public Services","JEA","Keys Energy Services","Kissimmee Utility Authority","Lakeland Electric","Lake Worth Utilities","Lee County Electric Cooperative","Leesburg Electric Department","Ocala Electric Utility","Okefenoke Rural Electric Membership Corporation","Orlando Utilities Commission","Palm Peach","Peace River Electric Cooperative","Progress Energy Florida","PowerSouth Energy Cooperative","Reedy Creek Energy Services","St. Cloud Utilities","Seminole Electric Cooperative","Sumter Electric Cooperative","Suwannee Valley Electric Cooperative","Talquin Electric Cooperative","TECO Energy, a part of Emera","Town of Havana Utilities","Tri-County Electric Cooperative","West Florida Electric Cooperative","Withlacoochee River Electric Cooperative"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Georgia"){
    providers = ["Georgia Power, a part of the Southern Company","Municipal Electric Authority of Georgia (MEAG Power)","Oglethorpe Power","BSDK Power","Tennessee Valley Authority","Altamaha EMC","Amicalola EMC","Abla espanol Electric","Blue Ridge Mountain EMC","Canoochee EMC","Carroll EMC","Central Georgia EMC","Coastal Electric Cooperative","Cobb EMC","Colquitt EMC","Coweta-Fayette EMC","Diverse Power Inc.","Diverse Power Inc. - Pataula District","Excelsior EMC","Flint Energies","Grady EMC","GreyStone Power Corp.","Habersham EMC","Hart EMC","Irwin EMC","Jackson EMC","Jefferson Energy Cooperative","Little Ocmulgee EMC","Marietta Power","Middle Georgia EMC","Mitchell EMC","North Georgia EMC","Ocmulgee EMC","Oconee EMC","Okefenoke REMC","Planters EMC","Rayle EMC","Satilla REMC","Sawnee EMC","Slash Pine EMC","Snapping Shoals EMC","Southern Rivers Energy","Sumter EMC","Three Notch EMC","Tri-County EMC","Tri-State EMC","Upson EMC","Walton EMC","Washington EMC","Direct Energy"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Hawaii"){
    providers = ["Hawaiian Electric Company (HECO), Oʻahu subsidiary of Hawaiian Electric Industries","Hawaiian Electric Light Company (HELCO), Island of Hawaiʻi subsidiary of Hawaiian Electric Industries","Kauaʻi Island Utility Cooperative (KIUC)","Maui Electric Company (MECO), Maui County subsidiary of Hawaiian Electric Industries"];   
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Idaho"){
    providers = ["Avista","Clearwater Power","IDACORP (Idaho Power)","PacifiCorp (Rocky Mountain Power)"];    
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Illinois"){
    providers = ["Ameren","Illinois power","Champion Energy","City Water, Light & Power (Springfield, Illinois)","ComEd, a subsidiary of Exelon","Direct Energy","Coles Moultrie Electric Cooperative","Prairie State Generating Company","Sullivan Electric Company"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Indiana"){
    providers = ["AES Indiana (formerly Indianapolis Power & Light)","American Electric Power (Indiana Michigan Power)","Cinergy Corporation","Duke Energy","Indiana Municipal Power Agency","NiSource","Northern Indiana Public Service Company","Vectren (Southern Indiana Gas & Electric Company)"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Iowa"){
    providers = ["Interstate Power and Light Company, a part of Alliant Energy","MidAmerican Energy"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Kansas"){
    providers = ["Kansas City Board of Public Utilities","Evergy","McPherson BPU"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Kentucky"){
    providers = ["American Electric Power","Cinergy Corporation","Direct Energy","Duke Energy","Kentucky Utilities","Louisville Gas & Electric","Owensboro Municipal Utilities","Tennessee Valley Authority"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Louisiana"){
    providers = ["CLECO","Entergy","SWEPCO, a subsidiary of American Electric Power","SLEMCO"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Maine"){
    providers = ["AVANGRID (Central Maine Power)","Direct Energy","Versant Power, a part of ENMAX"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Maryland"){
    providers = ["A&N Electric Cooperative","Agway Energy Services","Allegheny Electric Cooperative","Ambit Energy","Baltimore Gas and Electric, a subsidiary of Exelon","Berlin Electric Utility Department","Champion Energy","Choptank Electric Cooperative","Conectiv, a subsidiary of PEPCO which is a subsidiary of Exelon","Delmarva Power, a subsidiary of Exelon","Direct Energy","Easton Utilities","FirstEnergy (Potomac Edison)","Hagerstown Light Department","Just Energy","Southern Maryland Electric Cooperative (SMECO)","Town of Thurmont Municipal Light Company","Town of Williamsport Utilities"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Massachusetts"){
    providers = ["Ashburnham Municipal Light","Belmont Municipal Light","Berkshire Company (WMECO)","Braintree Electric Light Department","Boylston Electric Light Department","Chester Municipal Electric Light","Chicopee Electric Light Department","Concord Municipal Light Plant","Danvers Electric Department","Eversource Energy (NSTAR, Western Massachusetts Electric)","Georgetown Electric Department","Gosnold Municipal Electric Plant","Groton Electric Department","Groveland Light Department","Hingham Municipal Light Department","Holden Municipal Light Department","Holyoke Gas and Electric","Hudson Light and Water Department","Hull Electric Light Department","Ipswich Electric Light Department","Littleton Electric Light and Water Department","Marblehead Municipal Light Department","Mansfield Municipal Light Department","Merrimac Light and Water Department","Middleboro Municipal Gas and Electric Department","Middleton Municipal Light Department","National Grid (Massachusetts Electric, Nantucket Electric)","North Attleboro Electric Department","Northeast Utilities","Norwood Electric Light Department","NSTAR","Paxton Municipal Light Department","Peabody Municipal Light Plant","Princeton Electric Light Department","Reading Municipal Light Department","Rowley Electric Light Department","Russell Municipal Light Department","Shrewsbury Electric Light Department","South Hadley Electric Light Department","Sterling Electric Light Department","Taunton Municipal Light Plant","Templeton Municipal Light Company","Unitil Corporation","Wakefield Municipal Gas and Light Department","Wellesley Municipal Light Plant","West Boylston Municipal Lighting","Westfield Gas and Electric Department","PTI Electric Department","Direct Energy"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Michigan"){
    providers = ["Alger Delta Electric Cooperative","Alpena Power Company","American Electric Power (Indiana Michigan Power)","Cherryland Electric Cooperative","Cloverland Electric Cooperative (Cloverland acquired Edison Sault Electric Company in 2009)","Consumers Energy","DTE Energy (DTE Energy Electric Company)","Great Lakes Energy Cooperative","Holland Board of Public Works","Homeworks Tri-County Electric Cooperative","Lansing Board of Water & Light","Lowell Light and Power","Midwest Energy & Communications (Cooperative)","Ontonagon County REA (Cooperative)","Presque Isle Electric & Gas Cooperative","Thumb Electric Cooperative","Upper Peninsula Power Company","We Energies","Wyandotte Municipal Services"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Minnesota"){
    providers = ["Basin Electric Power Cooperative","Dairyland Power Coop","East River Electric Power Co-op","Freeborn-Mower Co-op Services","Great River Energy, and its 28 member cooperatives","Hutchinson Utilities Commission","Interstate Power and Light Company","L&O Power Co-op","Marshall Municipal Utilities","Minnkota Power Cooperative, and its 11 member cooperatives","Minnesota Power","Missouri River Energy","Northern States Power Company, a subsidiary of Xcel Energy","People's Co-op Tri-County Electric","Otter Tail Power Company","Rochester Public Utilities Commission","Southern Minnesota Municipal Power Agency","Willmar Municipal Utilities","Xcel Energy"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Mississippi"){
    providers = ["Entergy Mississippi","Magnolia Electric Power","Mississippi Power, a part of the Southern Company","Cooperative Energy, formerly South Mississippi Electric Power Association[2]","Tennessee Valley Authority","Pearl River Valley EPA","Yazoo Valley Electric Power Association","http://coastepa.com"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Missouri"){
    providers = ["Ameren","Aquila","Black River Electric Cooperative","City Utilities of Springfield","Hannibal, Missouri","Citizens Electric Corporation","Empire District Electric Company","Independence Power and Light","Intercounty Electric Cooperative Association","Kansas City Power and Light Company","Laclede Electric Cooperative","Macon Electric Cooperative","Missouri Rural Electric Cooperative","North Central Missouri Electric Cooperative","Howell-Oregon Electric Cooperative","Ozark Border Electric Cooperative","Semo Electric Cooperative","Sa-Ma-No Electric Cooperative","White River Valley Electric Cooperative"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Montana"){
    providers = ["Central Montana Electric Power Cooperative","Montana-Dakota Utilities (MDU)","Montana Electric Cooperatives' Association","Northwestern Energy"];   
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Nebraska"){
    providers = ["Nebraska Public Power District","Omaha Public Power District","Lincoln Electric System","Western Area Power Administration"];   
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Nevada"){
    providers = ["NV Energy (Nevada Power)","NextEra (Valley Electric Association)","Wells Rural Electric Company","Boulder City Electric Utility","Harney Electric Cooperative","Lincoln County Power","Mt Wheeler Power","Overton Power","Plumas Sierra Electric Cooperative","Surprise Valley Electric Cooperative"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "New Hampshire"){
    providers = ["Eversource Energy (Public Service Company of New Hampshire)","Liberty Utilities (including Granite State Electric)","New Hampshire Electric Cooperative","Northeast Utilities","National Grid","Unitil Corporation"];    
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "New Jersey"){
    providers = ["Atlantic City Electric, a subsidiary of Exelon","Jersey Central Power and Light Company, a subsidiary of FirstEnergy","Public Service Electric and Gas Company (PSE&G)","Rockland Electric, a subsidiary of Orange and Rockland, which is a subsidiary of Consolidated Edison","Borough of Madison Electric Utility","Borough of Milltown Electric Department","Borough of Park Ridge Electric Department","Borough of Seaside Heights Electric Utility","Borough of South River Electric Department","Butler Power and Light","Lavallette Electric Department","Pemberton Borough Electric Department","Sussex Rural Electric Cooperative","Vineland Municipal Electric Utility"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "New Mexico"){
    providers = ["El Paso Electric","Public Service Company of New Mexico","Southwestern Public Service Company, a subsidiary of Xcel Energy","Texas-New Mexico Power","Tri-State Generation and Transmission Association"];    
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "New York"){
    providers = ["Akron Municipal Electric Department","Angelica Municipal Electric Department","Approved Energy","Bath Municipal Electric Department","Bergen Municipal Electric Department","Boonville Municipal Electric Department","Brocton Municipal Electric Department","Castle Municipal Electric Department","Central Hudson Gas & Electric","CH Energy Group","Churchville Municipal Electric Department","Consolidated Edison Company of New York, subsidiary of Consolidated Edison","Direct Energy","East Coast Power & Gas","Fishers Island Municipal Electric Department","Frankfort Municipal Electric Department","Freeport Electric Department","Green Island Municipal Electric Department","Greenport Municipal Electric Department","Greene Municipal Electric Department","Groton Municipal Electric Department","Hamilton Municipal Electric Department","Ilion Municipal Electric Department","Jamestown Municipal Electric Department","Lake Placid Municipal Electric Department","Long Island Power Authority (LIPA), operated by PSEG Long Island","Marathon Municipal Electric Department","Massena Electric Department","Mayville Municipal Electric Department","National Grid (Niagara Mohawk)","New York Power Authority (NYPA)","New York State Electric & Gas, subsidiary of AVANGRID","Orange and Rockland, which is a subsidiary of Consolidated Edison","Penn Yan Municipal Electric Department","Philadelphia Municipal Electric Department","Plattsburgh Municipal Light Department","Northeast Utilities","Rochester Gas & Electric, subsidiary of AVANGRID","Rockville Centre Municipal Electric Department","Rouses Point Electric Department","Salamanca Municipal Electric Department","Sherburne Municipal Electric Department","Sherrill Municipal Electric Department","Skaneateles Municipal Electric Department","Sliver Springs Municipal Electric Department","Solvay Electric Department","Spencerport Municipal Electric Department","Springville Municipal Electric Department","Theresa Municipal Electric Department","Tupper Lake Municipal Electric Department","Watkins Glen Municipal Electric Department","Waverly Municipal Electric Department","Wellsville Municipal Electric Department","Westfield Municipal Electric Department"];   
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "North Carolina"){
    providers = ["Albemarle Electric Membership Corporation","Blue Ridge Energy","Brunswick Electric Membership Corporation","Cape Hatteras Electric Cooperative","Carteret-Craven Electric Cooperative","Central Electric Membership Corporation","City of Concord Electric Department","Dominion North Carolina Power","Duke Energy","Edgecombe-Martin County Electric Membership Corporation","EnergyUnited","Four County Electric Membership Corporation","French Broad Electric Membership Corporation","Halifax Electric Membership Corporation","Haywood Electric Membership Corporation","Jones-Onslow Electric Membership Corporation","Lumbee River Electric Membership Corporation","North Carolina Electric Membership Corporation","Pee Dee Electric Membership Corporation","Piedmont Electric Membership Corporation","Pitt & Greene Electric Membership Corporation","Randolph Electric Membership Corporation","Roanoke Electric Cooperative","Rutherford Electric Membership Corporation","South River Electric Membership Corporation","Surry-Yadkin Electric Membership Corporation","Tennessee Valley Authority","Tideland Electric Membership Corporation","Tri-County Electric Membership Corporation","Union Power Cooperative","Wake Electric Membership Corporation"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "North Dakota"){
    providers = ["Basin Electric Power Cooperative","Central Power Electric Cooperative","Montana Dakota Utilities (MDU)","Minnkota Power Cooperative","Northern States Power Company, a subsidiary of Xcel Energy","Otter Tail Power Company","Upper Missouri Power Cooperative (Upper Missouri G&T Cooperative)","Xcel Energy"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Ohio"){
    providers = ["American Electric Power","Consolidated Electric Cooperative","Dayton Power & Light","Direct Energy","Duke Energy","FirstEnergy (Cleveland Electric Illuminating Company, Ohio Edison, Toledo Edison)","South Central Power Company"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Oklahoma"){
    providers = ["East Central Electric Cooperative","Oklahoma Gas & Electric","Public Service Company of Oklahoma (part of American Electric Power)","Western Farmers Electric Cooperative"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Oregon"){
    providers = ["Columbia River Public Utility District","Coos-Curry Electric Coop","Eugene Water & Electric Board (EWEB)","PacifiCorp (Pacific Power)","Portland General Electric","West Oregon Electric Cooperative"];   
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Pennsylvania"){
    providers = ["Adams Electric Cooperative","Allegheny Electric Cooperative","Bedford Rural Electric Cooperative","Borough of Ephrata Electric Division","Borough of Hatfield Electric Utility","Borough of Kutztown Electric Department","Borough of Quakertown Electric Department","Borough of Schuylkill Haven Utilities Department","Central Electric Cooperative","Citizen's Electric Company","Claverack Rural Electric Cooperative","Direct Energy","Duquesne Light","FirstEnergy (Met-Ed, Penelec, Penn Power, West Penn Power)","Lansdale Electric","New Enterprise Rural Electric Cooperative","Northeast Utilities","Northwestern Rural Electric Cooperative","PECO, a subsidiary of Exelon","Perkasie Borough Electric Department","Pike County Light & Power","PPL Corporation","REA Energy Cooperative","Rural Valley Electric Co.","Somerset Rural Electric Cooperative","Sullivan County Rural Electric Cooperative","Tri-County Rural Electric Cooperative","UGI Utilities","United Electric Cooperative","Valley Rural Electric Cooperative","Warren Electric Cooperative","Wellsboro Electric Company"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Puerto Rico"){
    providers = ["Puerto Rico Electric Power Authority","EcoEléctrica"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Rhode Island"){
    providers = ["Direct Energy","National Grid (Narragansett Electric)","Northeast Utilities","Pascoag Utility District"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "South Carolina"){
    providers = ["Aiken Electric Co-Op","Berkeley Electric Co-Op","Black River Electric Co-op","Blue Ridge Electric Co-op","Broad River Electric Co-op","Central Electric Power Cooperative, Inc.","Coastal Electric Co-op","Duke Energy","Edisto Electric Co-op","Fairfield Electric Co-op","Horry Electric Co-op","Laurens Electric Co-op","Little River Electric Co-op","Lynches River Electric Co-op","Mid-Carolina Electric Co-op","Newberry Electric Co-op","Palmetto Electric Co-op","Progress Energy Carolinas","Santee Cooper","Santee Electric Co-op","Dominion Energy","Tri-County Electric Co-Op","York Electric Co-op"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "South Dakota"){
    providers = ["Black Hills Power","East River Electric Cooperative","MidAmerican Energy Company","Montana-Dakota Utilities (MDU)","Northern States Power Company, a subsidiary of Xcel Energy","Northwestern Energy","Otter Tail Power Company","Rushmore Electric Cooperative","Xcel Energy"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Tennessee"){
    providers = ["Appalachian Power, a unit of American Electric Power","Chickasaw Electric Cooperative","Citizens Utilities Board[where?]","EPB (Electric Power Board), Chattanooga, Hamilton County","Knoxville Utilities Board","Lenoir City Utilities Board","Memphis Light, Gas and Water","Middle Tennessee Electric, Electric Cooperative","Nashville Electric Service, metro Nashville, Davidson County","Tennessee Valley Authority"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Texas"){
    providers = ["Austin Energy","American Electric Power","Amigo Energy","South West Energy","Bartlett Electric Cooperative","Brazos Electric Power Cooperative","CenterPoint Energy","City of Bryan","City of Greenville","Comanche Electric Cooperative","CoServ Electric","Cosery Electric","CPS Energy","Denton Municipal Electric","Duke energy","Direct Energy","dPi Energy","El Paso Electric","Electric Database Publishing","Entergy","Entrust Energy","First Texas Energy Corporation","Fort Belknap Electric Cooperative","Garland Power & Light","GDF SUEZ Energy Resources","Golden Spread Electric Cooperative","Hudson Energy","Hamilton County Electric Cooperative","Heart of Texas Electric Cooperative","HILCO Electric Cooperative","J-A-C Electric Cooperative","Lower Colorado River Authority","Luminant","MidSouth Synergy","Navarro County Electric Cooperative","Navasota Valley Electric Cooperative","Oncor Electric Delivery (Formerly TXU)","Pedernales Electric Cooperative","PenTex Energy","Rayburn Electric Cooperative","Reliant Energy","South Plains Electric Cooperative","Southwestern Public Service Company, a subsidiary of Xcel Energy","Texas Electric Service Company","Texas New Mexico Power","Tara Energy","Tri-County Electric Cooperative","TXU Energy","United Cooperative Services","Wise Electric Cooperative"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Utah"){
    providers = ["City of Bountiful","IPA","City of Kaysville","PacifiCorp (Rocky Mountain Power)","pacificorp (Dominion Energy)"];   
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Vermont"){
    providers = ["Burlington Electric Department","Green Mountain Power","Vermont Electric Cooperative","Washington Electric Cooperative"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Virginia"){
    providers = ["A&N Electric Cooperative","Appalachian Power, a subsidiary of American Electric Power","BARC Electric Cooperative","Community Electric Cooperative","Craig-Botetourt Electric Cooperative","Danville Utilities","Dominion Virginia Power","Mecklenburg Electric Cooperative","Northern Neck Electric Cooperative","Northern Virginia Electric Cooperative","Old Dominion Electric Cooperative","Prince George Electric Cooperative","Rapahannock Electric Cooperative","Shenandoah Valley Electric Cooperative","Southside Electric Cooperative"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Washington"){
    providers = ["Avista Utilities","Benton County Public Utility District","Big Bend Electric","Chelan County Public Utility District","City of Milton","Clark Public Utilities","Clearwater Power","Columbia Rural Electric","Douglas County Public Utility District","Elmurst Mutual","Franklin County Public Utility District","Grant County Public Utility District","Klickitat Public Utility District","Lakeview Light & Power","Mason County Public Utility District 3","Modern Electric Water","Nespelem Valley Electric","Ohop Mutual","Okanaogan Country Electric & Propane","Orcas Power and Light Coop (OPALCO)","Parkland Light & Water","PacifiCorp (Pacific Power)","Peninsula Light Co","Pend Oreille County Public Utility District","Puget Sound Energy","Seattle City Light","Snohomish County Public Utility District","Tacoma Power","Tanner Electric Coop","Town of Stelacoom","Town of Eatonville"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "West Virginia"){
    providers = ["American Electric Power (Appalachian Power, Wheeling Electric Power)","FirstEnergy (Mon Power, Potomac Edison)","Black Diamond Power Company"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Wisconsin"){
    providers = ["Dairyland Power Cooperative (and its 25 member cooperatives)","Madison Gas and Electric","Northern States Power Company-Wisconsin, a subsidiary of Xcel Energy","We Energies","Wisconsin Power and Light Company, a part of Alliant Energy","Wisconsin Public Service Corporation"];
    autofill_select_options("#Provider", providers);
  }else if(document.getElementById("city").value == "Wyoming"){
    providers = ["Cheyenne Light, Fuel & Power","Lower Valley Energy","Bridger Valley","Niobrara Electric","Black Hills Power","Powder River Energy Corporation (A cooperative of Touchstone Energy)","Carbon Power & Light (A cooperative of Touchstone Energy)","PacifiCorp (Rocky Mountain Power)","Tri-State Generation and Transmission Association (A cooperative of Touchstone Energy)","Western Area Power Administration"];
    autofill_select_options("#Provider", providers);
  }else{
    autocomplete(document.getElementById("street"), []);
  }
});


