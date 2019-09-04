
        

      document.addEventListener('deviceready', onDeviceReady, false); 

        function onDeviceReady(){
            init();
            
        }  

            var test = {};
            test.webdb ={};
            

            test.webdb.db = null;

          
                
            
            test.webdb.open = function() {
                var dbSize = 10 * 1024 * 1024;
                test.webdb.db = openDatabase("Names", "1", "Persons", dbSize);
            }

            test.webdb.onError = function(tx, e) {
                alert("There has been an error: " + e.message);
            }

            test.webdb.onSuccess = function(tx, r) {
                // re-render the data.
                // 

               //test.webdb.getAllNameItems(loadNameItems);
            }

           test.webdb.createTable = function() {
               var db = test.webdb.db;
               db.transaction(function(tx) {
                    //tx.executeSql("DROP TABLE households");
                    
                    tx.executeSql("CREATE TABLE IF NOT EXISTS households(ID INTEGER PRIMARY KEY ASC, status Text, member_count INTEGER, family_name TEXT, date_profiled TEXT, nhts TEXT, nhts_no TEXT, four_ps TEXT, address_houseno TEXT, address_street TEXT, address_purok TEXT, address_barangay TEXT, address_city_municipality TEXT, address_province TEXT, address_postal_code TEXT, contact TEXT, ip_group TEXT, usual_hf_consult TEXT, usual_hf_travel_time TEXT, usual_hf_transpo TEXT, usual_hf_services_maternal TEXT, usual_hf_services_child TEXT, usual_hf_services_surgery TEXT, usual_hf_services_lab TEXT, usual_hf_services_inpatient TEXT, usual_hf_services_others_specify TEXT, usual_hf_pay_services_comm TEXT, usual_hf_pay_services_comm_specify TEXT, usual_hf_med_avail TEXT, usual_hf_med_not_avail TEXT, usual_hf_where_buy_med TEXT, usual_hf_pay_for_med TEXT, near_govt_hf TEXT, govt_hf_travel_time TEXT, govt_hf_transpo TEXT, govt_hf_services_maternal TEXT, govt_hf_services_child TEXT, govt_hf_services_surgery TEXT, govt_hf_services_lab TEXT, govt_hf_services_inpatient TEXT, govt_hf_services_others_specify TEXT, govt_hf_pay_services_comm TEXT, govt_hf_pay_services_comm_specify TEXT, govt_hf_med_avail TEXT, govt_hf_med_not_avail TEXT, govt_hf_where_buy_med TEXT, govt_hf_pay_for_med TEXT, near_pvt_hf TEXT, pvt_hf_travel_time TEXT, pvt_hf_transpo TEXT, pvt_hf_services_maternal TEXT, pvt_hf_services_child TEXT, pvt_hf_services_surgery TEXT, pvt_hf_services_lab TEXT, pvt_hf_services_inpatient TEXT, pvt_hf_services_others_specify TEXT, pvt_hf_med_avail TEXT, pvt_hf_med_not_avail TEXT, pvt_hf_where_buy_med TEXT, emergency_transpo_specify TEXT, drinking_bottled TEXT, drinking_refilling TEXT, drinking_nawasa TEXT, drinking_pump TEXT, drinking_dug TEXT, drinking_spring TEXT, drinking_others_specify TEXT, cooking_bottled TEXT, cooking_refilling TEXT, cooking_nawasa TEXT, cooking_pump TEXT, cooking_dug TEXT, cooking_spring TEXT, cooking_others_specify TEXT, domestic_nawasa TEXT, domestic_pump TEXT, domestic_dug TEXT, domestic_spring TEXT, domestic_others_specify TEXT, own_toilet TEXT, water_sealed TEXT, no_toilet TEXT, garbage_collected TEXT, garbage_burned TEXT, garbage_dumped TEXT, garbage_others_specify TEXT, beside_highway TEXT, coastal_area TEXT, near_water TEXT, hx_landslide TEXT, hx_flooding TEXT, near_mining TEXT, bgy_typhoon TEXT, hh_typhoon TEXT, bgy_flooding TEXT, hh_flooding TEXT, hh_earthquake TEXT, near_evac_specify TEXT)");
                    
                    //tx.executeSql("CREATE TABLE IF NOT EXISTS households(ID INTEGER PRIMARY KEY ASC, member_count INTEGER, family_name TEXT, address_houseno TEXT, address_street TEXT, address_purok TEXT, address_barangay TEXT, address_city_municipality TEXT, address_province TEXT, address_postal_code TEXT, contact TEXT, ip_group TEXT)");
                   //tx.executeSql("CREATE TABLE IF NOT EXISTS households(ID INTEGER PRIMARY KEY ASC, fname TEXT, lname TEXT, number_test INT, birthday_test TEXT, sex_test TEXT, added_on DATETIME)");
                  // tx.executeSql("CREATE TABLE IF NOT EXISTS members(ID INTEGER PRIMARY KEY ASC, fname TEXT, lname TEXT, number_test INT, birthday_test TEXT, added_on DATETIME)");
                   
               });

               
           }
        
             test.webdb.addName = function(data,usual_consult) {
                 var stats = 'New';
               var db  = test.webdb.db;
               db.transaction(function(tx){
                   tx.executeSql("INSERT INTO households(status, member_count, family_name, date_profiled, nhts, nhts_no, four_ps, address_houseno, address_street, address_purok, address_barangay, address_city_municipality, address_province, address_postal_code, contact, ip_group, usual_hf_consult, usual_hf_travel_time, usual_hf_transpo, usual_hf_services_maternal, usual_hf_services_child, usual_hf_services_surgery, usual_hf_services_lab, usual_hf_services_inpatient, usual_hf_services_others_specify, usual_hf_pay_services_comm, usual_hf_pay_services_comm_specify, usual_hf_med_avail, usual_hf_med_not_avail, usual_hf_where_buy_med, usual_hf_pay_for_med, near_govt_hf, govt_hf_travel_time, govt_hf_transpo, govt_hf_services_maternal, govt_hf_services_child, govt_hf_services_surgery, govt_hf_services_lab, govt_hf_services_inpatient, govt_hf_services_others_specify, govt_hf_pay_services_comm, govt_hf_pay_services_comm_specify, govt_hf_med_avail, govt_hf_med_not_avail, govt_hf_where_buy_med, govt_hf_pay_for_med, near_pvt_hf, pvt_hf_travel_time, pvt_hf_transpo, pvt_hf_services_maternal, pvt_hf_services_child, pvt_hf_services_surgery, pvt_hf_services_lab, pvt_hf_services_inpatient, pvt_hf_services_others_specify, pvt_hf_med_avail, pvt_hf_med_not_avail, pvt_hf_where_buy_med, emergency_transpo_specify, drinking_bottled, drinking_refilling, drinking_nawasa, drinking_pump, drinking_dug, drinking_spring, drinking_others_specify, cooking_bottled, cooking_refilling, cooking_nawasa, cooking_pump, cooking_dug, cooking_spring, cooking_others_specify, domestic_nawasa, domestic_pump, domestic_dug, domestic_spring, domestic_others_specify, own_toilet, water_sealed, no_toilet, garbage_collected, garbage_burned, garbage_dumped, garbage_others_specify, beside_highway, coastal_area, near_water, hx_landslide, hx_flooding, near_mining, bgy_typhoon, hh_typhoon, bgy_flooding, hh_flooding, hh_earthquake, near_evac_specify) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                    [stats, data.key0, data.key1, data.key2, data.key3, data.key4, data.key5, data.key6, data.key7, data.key8, data.key9, data.key10, data.key11, data.key12, data.key13, data.key14, usual_consult, data.key17, data.key18, data.key19, data.key20, data.key21, data.key22, data.key23, data.key24, data.key25, data.key26, data.key27, data.key28, data.key29, data.key30, data.key31, data.key32, data.key33, data.key34, data.key35, data.key36, data.key37, data.key38, data.key39, data.key40, data.key41, data.key42, data.key43, data.key44, data.key45, data.key46, data.key47, data.key48, data.key49, data.key50, data.key51, data.key52, data.key53, data.key54, data.key55, data.key56, data.key57, data.key58, data.key59, data.key60, data.key61, data.key62, data.key63, data.key64, data.key65, data.key66, data.key67, data.key68, data.key69, data.key70, data.key71, data.key72, data.key73, data.key74, data.key75, data.key76, data.key77, data.key78, data.key79, data.key80, data.key81, data.key82, data.key83, data.key84, data.key85, data.key86, data.key87, data.key88, data.key89, data.key90, data.key91, data.key92, data.key93, data.key94, data.key95, data.key96],
                    test.webdb.onSuccess,
                    test.webdb.onError);
               });
           }

           /* test.webdb.addName_tenta = function(one,two,three,four,five,six,seven,eight,nine,ten,eleven){
               var db = test.webdb.db;
               db.transaction(function(tx){
               tx.executeSql("INSERT INTO households(member_count, family_name, address_houseno, address_street, address_purok, address_barangay, address_city_municipality, address_province, address_postal_code, contact, ip_group) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
               [one,two,three,four,five,six,seven,eight,nine,ten,eleven],
               test.webdb.onSuccess,
               test.webdb.onError);
            });
           } */

           /*
           test.webdb.getAllNameItems = function(renderFunc) {
               var db = test.webdb.db;
               db.transaction(function(tx) {
                   tx.executeSql("SELECT * FROM households", [], renderFunc, test.webdb.onError);
               });
           }

           

          function loadNameItems(tx, rs) {
               var rowOutput = "";
               var HHItems = document.getElementById("HHItems");
               for (var i=0; i < rs.rows.length; i++) {
                   rowOutput += renderName(rs.rows.item(i));
               }
               HHItems.innerHTML = rowOutput;
           } 

           function renderName(row) {
               return "<li>" + row.fname +  " -> "+ row.lname + "[<a href='javascript:void(0);' onclick=\'test.webdb.deleteName(" + 
               row.ID +");\'>Delete</a>]</li>" + row.added_on + "<input type = 'button' value = 'edit' onclick='test.webdb.editName();'>" + "<p id='idno'>" + row.ID + "</p>";
           }
           */

           test.webdb.editName = function (ctrlReff) {
            ID = document.getElementById("idno").innerHTML;
            console.log(document.getElementsByTagName("li".children[1].innerHTML));
            
           // console.log(document.getElementById("idno").innerHTML); 
               //document.getElementById("firstname").value = row.fname;
               //document.getElementById("lastname").value = row.lname;
               
           }

           test.webdb.deleteName = function (id) {
               var db = test.webdb.db;
               db.transaction(function(tx) {
                   tx.executeSql("DELETE FROM households WHERE ID=?", [id],
                   test.webdb.onSuccess,
                   test.webdb.onError);
               });
           }
        
          function init() {
           
                  test.webdb.open();
                  test.webdb.createTable();
                //test.webdb.getAllNameItems(loadNameItems);
              
           
        }

        /* function addName_tenta(){
            var id = ['no_members','HH_lastname','address_houseno','address_street','sitio_purok','bgy_add','address_Municipality','address_Province','address_Pcode','contactno','ip_group'];
            var $var = [];
             for (var i = 0; i < id.length; i++){
                $var[i] = $('#'+id[i]).val();
            } 
            alert($var);
            test.webdb.addName_tenta($var[0],$var[1],$var[2],$var[3],$var[4],$var[5],$var[6],$var[7],$var[8],$var[9],$var[10]);
            //document.location.replace('test.html');
        } */

        function addName(){
            var mem = document.getElementById('no_members').value;
            var fam = document.getElementById('HH_lastname').value;
            var bgy = document.getElementById('bgy_add').value;
            if (mem === '' || fam === ''){
                return;
            }
            if(bgy===''){
                $('#click_address').click();
                return;
            }
            else{}
            var id = ['no_members','HH_lastname','HH_date_profiled',
                    'nhts_yes','nhts_no','four_ps','address_houseno',
                    'address_street','sitio_purok','bgy_add','address_Municipality',
                    'address_Province','address_postal_code','contact','ip_group',
                    'HH_usual_consult_select','HH_usual_consult_others',
                    'travel_h_to_f_time','travel_h_to_f_by','usual_hf_service_maternal',
                    'usual_hf_service_child','usual_hf_service_surgery','usual_hf_service_laboratoy',
                    'usual_hf_service_inpatient','usual_hf_service_others',
                    'checkbox_pay_service','usual_hf_service_pay_comm_others','checkbox_med_hf',
                    'usual_hf_med_not_avail','usual_hf_where_buy_med','checkbox_med_hf_pay',
                    'HH_govt_consult_select','travel_h_to_f_time_govt','travel_h_to_f_by_govt',
                    'govt_service_maternal','govt_service_child','govt_service_surgery',
                    'govt_service_laboratoy','govt_service_inpatient','govt_service_others',
                    'checkbox_pay_service_govt','govt_service_pay_comm_others',
                    'checkbox_pay_service_govt_med','govt_med_not_avail','govt_where_buy_med',
                    'checkbox_med_hf_pay_govt','nearest_pvt_hf','pvt_hf_travel_time',
                    'pvt_hf_travel_by','pvt_service_maternal','pvt_service_child',
                    'pvt_service_surgery','pvt_service_laboratoy','pvt_service_inpatient',
                    'pvt_service_others','checkbox_pay_service_pvt_med','pvt_med_not_avail',
                    'pvt_where_buy_med','emergency_transpo_spec','drinking_bottled',
                    'drinking_refilling','drinking_nawasa','drinking_pump',
                    'drinking_dug','drinking_spring','drinking_others','cooking_bottled',
                    'cooking_refilling','cooking_nawasa','cooking_pump','cooking_dug',
                    'cooking_spring','cooking_others','domestic_nawasa',
                    'domestic_pump','domestic_dug','domestic_spring',
                    'domestic_others','own_toilet','water_sealed_check',
                    'no_toilet','garbage_collected','garbage_burned','garbage_dumped',
                    'garbage_others','beside_highway','coastal_area','near_water',
                    'hx_landslide','hx_flooding','near_mining','bgy_typhoon','hh_typhoon',
                    'bgy_flooding','hh_flooding','hh_earthquake','nearest_evac_specify'];

           
            var $var = [];
            for(var i = 0; i < id.length; i++){
                if (i == 5 || i == 25 || i == 27 || i == 30 || i == 40 || i == 42 || i == 45 || i == 55 || i == 78 || i == 80){
                    $var[i] = $("input[name="+ id[i] +"]:checked").val();
                    continue;
                }

                $var[i] = $('#'+id[i]).val();
            }

            var usual_consult = $var[15] + $var[16];

            //var $var_obj = Object.assign({}, $var);
            /* for(var i = 0; i < id.length; i++){
                $var_obj = {i: id[i]}
            } */
            var $var_obj = {};
            var $keys = [];
            for(var i=0;i<id.length;i++){
                $keys[i] = 'key'+i;
                              
            }
            for(var i=0;i<id.length;i++){
                $var_obj[$keys[i]] = $var[i]; 
            } 
            
            /* $var_obj.keys = 'pelo';
            $var_obj.pelo = 'keys'; */
            //alert(Object.entries($var_obj));
           test.webdb.addName($var_obj,usual_consult);
            document.location.replace('test.html');
 
        }

        

          /* 

                var eighty_seven = document.getElementById('near_water');
                var eighty_eight = document.getElementById('hx_landslide');
                var eighty_nine = document.getElementById('hx_flooding');
                var ninety = document.getElementById('near_mining');
                var ninety_one = document.getElementById('bgy_typhoon');
                var ninety_two = document.getElementById('hh_typhoon');
                var ninety_three = document.getElementById('bgy_flooding');
                var ninety_four = document.getElementById('hh_flooding');
                var ninety_five = document.getElementById('hh_earthquake');
                var ninety_six = document.getElementById('nearest_evac_specify');
                var ninety_seven = document.getElementById('ip_group');
              test.webdb.addName(one.value, two.value, three.value, four.value, five, six, seven.value, eight.value, nine.value, ten.value, eleven.value, twelve.value, thirteen.value, fourteen.value, fifteen.value, sixteen, seventeen.value, eighteen.value, nineteen.value, twenty.value, twenty_one.value, twenty_two.value, twenty_three.value, twenty_four.value, twenty_five, twenty_six.value, twenty_seven, twenty_eight.value, twenty_nine.value, thirty, thirty_one.value, thirty_two.value, thirty_three.value, thirty_four.value, thirty_five.value, thirty_six.value, thirty_seven.value, thirty_eight.value, thirty_nine.value, forty, forty_one.value, forty_two, forty_three.value, forty_four.value, forty_five, forty_six.value, forty_seven.value, forty_eight.value, forty_nine.value, fifty.value, fifty_one.value, fifty_two.value, fifty_three.value, fifty_four.value, fifty_five, fifty_six.value, fifty_seven.value, fifty_eight.value, fifty_nine.value, sixty.value, sixty_one.value, sixty_two.value, sixty_three.value, sixty_four.value, sixty_five.value, sixty_six.value, sixty_seven.value, sixty_eight.value, sixty_nine.value, seventy.value, seventy_one.value, seventy_two.value, seventy_three.value, seventy_four.value, seventy_five.value, seventy_six.value, seventy_seven.value, seventy_eight, seventy_nine.value, eighty, eighty_one.value, eighty_two.value, eighty_three.value, eighty_four.value, eighty_five.value, eighty_six.value, eighty_seven.value, eighty_eight.value, eighty_nine.value, ninety.value, ninety_one.value, ninety_two.value, ninety_three.value, ninety_four.value, ninety_five.value, ninety_six.value, ninety_seven.value);
                 one.value='';
                 two.value='';
                 three.value='';
                 four.value='';
                 five='';
                 six='';
                 seven.value='';
                 eight.value='';
                 nine.value='';
                 ten.value='';
                 eleven.value='';
                 twelve.value='';
                 thirteen.value='';
                 fourteen.value='';
                 fifteen.value='';
                 sixteen='';
                 seventeen.value='';
                 eighteen.value='';
                 nineteen.value='N/A';
                 twenty.value='N/A';
                 twenty_one.value='N/A';
                 twenty_two.value='N/A';
                 twenty_three.value='N/A';
                 twenty_four.value='N/A';
                 twenty_five='';
                 twenty_six.value='N/A';
                 twenty_seven='';
                 twenty_eight.value='N/A';
                 twenty_nine.value='N/A';
                 thirty='';
                 thirty_one.value='';
                 thirty_two.value='';
                 thirty_three.value='';
                 thirty_four.value='N/A';
                 thirty_five.value='N/A';
                 thirty_six.value='N/A';
                 thirty_seven.value='N/A';
                 thirty_eight.value='N/A';
                 thirty_nine.value='N/A';
                 forty='';
                 forty_one.value='';
                 forty_two='';
                 forty_three.value='';
                 forty_four.value='';
                 forty_five='';
                 forty_six.value='';
                 forty_seven.value='N/A';
                 forty_eight.value='N/A';
                 forty_nine.value='N/A';
                 fifty.value='N/A';
                 fifty_one.value='N/A';
                 fifty_two.value='N/A';
                 fifty_three.value='N/A';
                 fifty_four.value='N/A';
                 fifty_five='N/A';
                 fifty_six.value='N/A';
                 fifty_seven.value='N/A';
                 fifty_eight.value='NO';
                 fifty_nine.value='NO';
                 sixty.value='NO';
                 sixty_one.value='NO';
                 sixty_two.value='NO';
                 sixty_three.value='NO';
                 sixty_four.value='NO';
                 sixty_five.value='NO';
                 sixty_six.value='NO';
                 sixty_seven.value='NO';
                 sixty_eight.value='NO';
                 sixty_nine.value='NO';
                 seventy.value='NO';
                 seventy_one.value='NO';
                 seventy_two.value='N/A';
                 seventy_three.value='NO';
                 seventy_four.value='NO';
                 seventy_five.value='NO';
                 seventy_six.value='NO';
                 seventy_seven.value='N/A';
                 seventy_eight='';
                 seventy_nine.value='NO';
                 eighty='N/A';
                 eighty_one.value='NO';
                 eighty_two.value='NO';
                 eighty_three.value='NO';
                 eighty_four.value='N/A';
                 eighty_five.value='NO';
                 eighty_six.value='NO';
                 eighty_seven.value='NO';
                 eighty_eight.value='NO';
                 eighty_nine.value='NO';
                 ninety.value='NO';
                 ninety_one.value='';
                 ninety_two.value='';
                 ninety_three.value='';
                 ninety_four.value='';
                 ninety_five.value='';
                 ninety_six.value='';
                 ninety_seven.value='';
                 alert('successfully added');
                 document.location.replace('test.html');
                }       
                else{
                    alert('Please select one in "Own a toilet?" at Sanitation Facilities');
                } 

                
            }*/
            /*
               var fname = document.getElementById("textFirstname");
               var lname = document.getElementById("textLastname");
               var bday_month = document.getElementById("head_birthdate_month");
               var bday_day = document.getElementById("head_birthdate_day");
               var bday_year = document.getElementById("head_birthdate_year");
               var number_test = document.getElementById("number_test");
            
               var sex_test = $("input[name='head_sex']:checked").val();
               var birthdate = bday_month.value + ' ' + bday_day.value + ' ' + bday_year.value;
               test.webdb.addName(fname.value, lname.value, number_test.value, birthdate, sex_test);
               fname.value="";
               lname.value="";
               bday_month.value="";
               bday_day.value="";
               bday_year.value="";
               number_test.value="";
               birthdate="";
               sex_test="";*/


               

           



















/*










            var test = {};
            test.webdb ={};
            

            test.webdb.db = null;

                
            
            test.webdb.open = function() {
                var dbSize = 5 * 1024 * 1024;
                test.webdb.db = openDatabase("Names", "1", "Persons", dbSize);
            }

            


            test.webdb.open();
           

           

        function populateDB(tx) {
            var db = test.webdb.db;
                db.transaction(function(tx) {
                    tx.executeSql("CREATE TABLE IF NOT EXISTS households(ID INTEGER PRIMARY KEY ASC, fname TEXT, lname TEXT, added_on DATETIME");
                });
        tx.executeSql('SELECT * FROM Names');
        tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (ID INTEGER PRIMARY KEY ASC, fname TEXT, lname TEXT)');
        tx.executeSql('INSERT INTO DEMO (ID, fname, lname) VALUES (1, "Aaron", "Domingo")');
        tx.executeSql('INSERT INTO DEMO (ID, fname, lname) VALUES (2, "Bill", "Domingo")'); 
    }

    // Query the database
    //
   var queryDB = function queryDB(tx) {
        tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
    }

    // Query the success callback
    //
    function querySuccess(tx, results) {
        var len = results.rows.length;
        console.log("DEMO table: " + len + " rows found.");
        var HHItems = document.getElementById("HHItems");
        for (var i=0; i<len; i++){
        var Output = "Row = " + i + " ID = " + results.rows.item(i).ID + " First Name =  " + results.rows.item(i).fname + " Last Name = " + results.rows.item(i).lname;
            console.log("Row = " + i + " ID = " + results.rows.item(i).ID + " First Name =  " + results.rows.item(i).fname + " Last Name = " + results.rows.item(i).lname);
        }
        HHItems.innerHTML = Output;
    }

    // Transaction error callback
    //
    function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
    }

    // Transaction success callback
    //
    function successCB() {
        var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
        db.transaction(queryDB, errorCB);
    }

    // PhoneGap is ready
    //
    function onDeviceReady() {
        var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
        db.transaction(populateDB, errorCB, successCB);
    }

 
    function SubmitValues() {
        var db = openDatabase ("Database,", "1", "DEMO" , "5*1024*1024");
        alert("button pressed");
        var Firstname = document.getElementById("firstname").value;
        var Lastname = document.getElementById("lastname").value;
       
         db.transaction(function(tx) {
          //  tx.executeSql('DROP TABLE IF EXISTS DEMO');
            //tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (ID INTEGER PRIMARY KEY ASC, fname TEXT, lname TEXT)');
            tx.executeSql('INSERT INTO DEMO(fname, lname) VALUES (?,?)', [Firstname, Lastname]);
         
            }
         )
            
    }

   */