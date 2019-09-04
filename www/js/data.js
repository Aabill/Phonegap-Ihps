

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

           

           test.webdb.createTable = function() {
               var db = test.webdb.db;
               db.transaction(function(tx) {
                //tx.executeSql("DROP TABLE households");
                //tx.executeSql("CREATE TABLE IF NOT EXISTS households(ID INTEGER PRIMARY KEY ASC, fname TEXT, lname TEXT, number_test INT, birthday_test TEXT, sex_test TEXT added_on DATETIME)");
                tx.executeSql("CREATE TABLE IF NOT EXISTS households(ID INTEGER PRIMARY KEY ASC, status TEXT, member_count INTEGER, family_name TEXT, date_profiled TEXT, nhts TEXT, nhts_no TEXT, four_ps TEXT, address_houseno TEXT, address_street TEXT, address_purok TEXT, address_barangay TEXT, address_city_municipality TEXT, address_province TEXT, address_postal_code TEXT, contact TEXT, ip_group TEXT, usual_hf_consult TEXT, usual_hf_travel_time TEXT, usual_hf_transpo TEXT, usual_hf_services_maternal TEXT, usual_hf_services_child TEXT, usual_hf_services_surgery TEXT, usual_hf_services_lab TEXT, usual_hf_services_inpatient TEXT, usual_hf_services_others_specify TEXT, usual_hf_pay_services_comm TEXT, usual_hf_pay_services_comm_specify TEXT, usual_hf_med_avail TEXT, usual_hf_med_not_avail TEXT, usual_hf_where_buy_med TEXT, usual_hf_pay_for_med TEXT, near_govt_hf TEXT, govt_hf_travel_time TEXT, govt_hf_transpo TEXT, govt_hf_services_maternal TEXT, govt_hf_services_child TEXT, govt_hf_services_surgery TEXT, govt_hf_services_lab TEXT, govt_hf_services_inpatient TEXT, govt_hf_services_others_specify TEXT, govt_hf_pay_services_comm TEXT, govt_hf_pay_services_comm_specify TEXT, govt_hf_med_avail TEXT, govt_hf_med_not_avail TEXT, govt_hf_where_buy_med TEXT, govt_hf_pay_for_med TEXT, near_pvt_hf TEXT, pvt_hf_travel_time TEXT, pvt_hf_transpo TEXT, pvt_hf_services_maternal TEXT, pvt_hf_services_child TEXT, pvt_hf_services_surgery TEXT, pvt_hf_services_lab TEXT, pvt_hf_services_inpatient TEXT, pvt_hf_services_others_specify TEXT, pvt_hf_med_avail TEXT, pvt_hf_med_not_avail TEXT, pvt_hf_where_buy_med TEXT, emergency_transpo_specify TEXT, drinking_bottled TEXT, drinking_refilling TEXT, drinking_nawasa TEXT, drinking_pump TEXT, drinking_dug TEXT, drinking_spring TEXT, drinking_others_specify TEXT, cooking_bottled TEXT, cooking_refilling TEXT, cooking_nawasa TEXT, cooking_pump TEXT, cooking_dug TEXT, cooking_spring TEXT, cooking_others_specify TEXT, domestic_nawasa TEXT, domestic_pump TEXT, domestic_dug TEXT, domestic_spring TEXT, domestic_others_specify TEXT, own_toilet TEXT, water_sealed TEXT, no_toilet TEXT, garbage_collected TEXT, garbage_burned TEXT, garbage_dumped TEXT, garbage_others_specify TEXT, beside_highway TEXT, coastal_area TEXT, near_water TEXT, hx_landslide TEXT, hx_flooding TEXT, near_mining TEXT, bgy_typhoon TEXT, hh_typhoon TEXT, bgy_flooding TEXT, hh_flooding TEXT, hh_earthquake TEXT, near_evac_specify TEXT)");
                //tx.executeSql("CREATE TABLE IF NOT EXISTS households(ID INTEGER PRIMARY KEY ASC, member_count INTEGER, family_name TEXT, address_houseno TEXT, address_street TEXT, address_purok TEXT, address_barangay TEXT, address_city_municipality TEXT, address_province TEXT, address_postal_code TEXT, contact TEXT, ip_group TEXT)");
                
                //tx.executeSql("DROP TABLE member");
                tx.executeSql("CREATE TABLE IF NOT EXISTS member(ID INTEGER PRIMARY KEY ASC, household_id INTEGER, FIRST_NAME TEXT, MIDDLE_NAME TEXT, LAST_NAME TEXT, EXTEND_NAME TEXT, BIRTHDAY TEXT, RELATIONSHIP TEXT, SEX TEXT, OCCUPATION TEXT, YEARS_IN_ADDRESS TEXT, BIRTH_CITY TEXT, BIRTH_PROVINCE TEXT, PHIC_STATUS TEXT, PHIC_TYPE TEXT)");
                //tx.executeSql("CREATE TABLE IF NOT EXISTS member(ID INTEGER PRIMARY KEY ASC, household_id TEXT, FIRST_NAME TEXT, MIDDLE_NAME TEXT, LAST_NAME TEXT, EXTEND_NAME TEXT, BIRTHDAY TEXT, RELATIONSHIP TEXT, SEX TEXT, OCCUPATION TEXT, YEARS_IN_ADDRESS TEXT, BIRTH_CITY TEXT, BIRTH_PROVINCE TEXT, PHIC_STATUS TEXT, PHIC_TYPE TEXT");
                });

               
           }
          

           

           function init() {
           
            test.webdb.open();
            test.webdb.createTable();
            
           
            var db = test.webdb.db;
            db.transaction(function(tx) {
                tx.executeSql('SELECT * FROM households', [], function(tx, rs)
                {   
                 
                    
                    if (rs.rows.length == 0){
                        $('#jumbo').show();
                        $('#showtable').hide();
                        $('#search_div').hide();
                        $('#showtable_members').hide();
                    }else {
                        $('#showtable').show();
                        $('#search_div').show();
                        $('#jumbo').hide();
                    }
                    var tblData = document.getElementById("tblData");
                    var strData = "<thead><tr><th class='center_mo'><span class='label label-danger center_mo'>Delete</span></th><th class='center_mo'><span class='label label-info center_mo'>Update</span></th><th class='center_mo'><span class='label label-primary'>Add Member</span></th><th class='center_mo'><span class='label label-success'>Upload</span></th><th class='center_mo'><span class='label label-default'>Status</span></th><th class='center_mo'><span class='label label-default'>ID</span></th><th class='center_mo'><span class='label label-default'>Members</span></th><th class='center_mo'><span class='label label-default'>Date profiled</span></th><th class='center_mo'><span class='label label-default'>Family name</span></th><th class='center_mo'><span class='label label-default'>House no.</span></th><th class='center_mo'><span class='label label-default'>Street</span></th><th class='center_mo'><span class='label label-default'>Purok</span></th><th class='center_mo'><span class='label label-default'>Barangay</span></th><th class='center_mo'><span class='label label-default'>City/Municipality</span></th><th class='center_mo'><span class='label label-default'>Province</span></th><th class='center_mo'><span class='label label-default'>Postal code</span></th><th class='center_mo'><span class='label label-default'>Contact #</span></th><th class='center_mo'><span class='label label-default'>IP group</span></th></tr></thead>";
                    for(var i=0;i< rs.rows.length;i++) {
                        strData += "<tbody id='myTable'><tr>";
                            //All db names are case-sensitive                            
                            strData += "<td class='center_mo'><button class='btn btn-danger' onclick='DeleteRecord(this)'><span class='glyphicon glyphicon-trash'></span></button></td>";
                            strData += "<td class='center_mo'><button class='btn btn-info' onclick='values_hh(this)'><span class='glyphicon glyphicon-edit'></span></button></td>";
                            strData += "<td class='center_mo'><button class='btn btn-primary' onclick='Add_Member(this)'><span class='glyphicon glyphicon-plus-sign'></span><span class='glyphicon glyphicon-user'></span></button></td>";
                            strData += "<td class='center_mo'><button class='btn btn-success'  onclick='Upload(this)'><span class='glyphicon glyphicon-upload'></span></button></td>";
                            strData += "<td class='center_mo'>" + rs.rows.item(i).status + "</td>";
                            strData += "<td class='center_mo'>" + rs.rows.item(i).ID + "</td>";
                            strData += "<td class='center_mo'>" + rs.rows.item(i).member_count + "</td>";
                            strData += "<td class='center_mo'>" + rs.rows.item(i).date_profiled + "</td>";
                            strData += "<td class='center_mo'>" + rs.rows.item(i).family_name + "</td>";
                            strData += "<td class='center_mo'>" + rs.rows.item(i).address_houseno + "</td>";
                            strData += "<td class='center_mo'>" + rs.rows.item(i).address_street + "</td>";
                            strData += "<td class='center_mo'>" + rs.rows.item(i).address_purok + "</td>";
                            strData += "<td class='center_mo'>" + rs.rows.item(i).address_barangay + "</td>";
                            strData += "<td class='center_mo'>" + rs.rows.item(i).address_city_municipality + "</td>";
                            strData += "<td class='center_mo'>" + rs.rows.item(i).address_province + "</td>";
                            strData += "<td class='center_mo'>" + rs.rows.item(i).address_postal_code + "</td>";
                            strData += "<td class='center_mo'>" + rs.rows.item(i).contact + "</td>";
                            strData += "<td class='center_mo'>" + rs.rows.item(i).ip_group + "</td>";
                            
                        strData += "</tr></tbody>";
                            
                    }
                    tblData.innerHTML = strData;
                    
                    
                   

                 
                }, function(tx, error) {
                  alert('Error fetching records: ' + error.message);
                });
              });

           
           


              // MEMBERS

              db.transaction(function(tx) {
                tx.executeSql('SELECT * FROM member', [], function(tx, rs)
                {
                    if (rs.rows.length == 0){
                        
                    }else{
                        $('#check_members').click();
                    }
                    var tblData = document.getElementById("tblData_members");
                    var strData = "<thead><tr><th class='center_mo'>Delete</th><th class='center_mo'>Update</th><th class='center_mo'>ID</th><th class='center_mo'>Household_ID</th><th class='center_mo'>First name</th><th class='center_mo'>Middle name</th><th class='center_mo'>Last name</th><th class='center_mo'>Ext. name</th><th class='center_mo'>Birthday</th><th class='center_mo'>Relationship</th><th class='center_mo'>Sex</th><th class='center_mo'>Occupation</th><th class='center_mo'>Years in address</th><th class='center_mo'>Birthplace City/Municipality</th><th class='center_mo'>Birthplace Province</th><th class='center_mo'>Phic Status</th><th class='center_mo'>Phic Type</th></tr></thead>";
                    for(var i=0;i< rs.rows.length;i++) {
                        strData += "<tbody id='myTable'><tr>";
                            //All db names are case-sensitive                            
                            strData += "<td><button class='btn btn-danger' onclick='DeleteRecord_member(this)'><span class='glyphicon glyphicon-trash'></span></button></td>";
                            strData += "<td><button class='btn btn-info' onclick='EditRecordTest_member(this)'><span class='glyphicon glyphicon-edit'></span></button></td>";
                           
                           
                            strData += "<td>" + rs.rows.item(i).ID + "</td>";
                            strData += "<td>" + rs.rows.item(i).household_id + "</td>";
                            strData += "<td>" + rs.rows.item(i).FIRST_NAME + "</td>";
                            strData += "<td>" + rs.rows.item(i).MIDDLE_NAME + "</td>";
                            strData += "<td>" + rs.rows.item(i).LAST_NAME + "</td>";
                            strData += "<td>" + rs.rows.item(i).EXTEND_NAME + "</td>";
                            strData += "<td>" + rs.rows.item(i).BIRTHDAY + "</td>";
                            strData += "<td>" + rs.rows.item(i).RELATIONSHIP + "</td>";
                            strData += "<td>" + rs.rows.item(i).SEX + "</td>";
                            strData += "<td>" + rs.rows.item(i).OCCUPATION + "</td>";
                            strData += "<td>" + rs.rows.item(i).YEARS_IN_ADDRESS + "</td>";
                            strData += "<td>" + rs.rows.item(i).BIRTH_CITY + "</td>";
                            strData += "<td>" + rs.rows.item(i).BIRTH_PROVINCE + "</td>";
                            strData += "<td>" + rs.rows.item(i).PHIC_STATUS + "</td>";
                            strData += "<td>" + rs.rows.item(i).PHIC_TYPE + "</td>";
                            
                        strData += "</tr></tbody>";
                       
                    }
                    tblData.innerHTML = strData;

                    

                 
                }, function(tx, error) {
                  alert('Error fetching records: ' + error.message);
                });
              });

           }

           function values_hh(ctrlReff){
            ID = ctrlReff.parentElement.parentElement.children[5].innerHTML;
          
                   
            var db = test.webdb.db;
                 
             
             db.transaction(function(tx) {
                 tx.executeSql('SELECT * FROM households WHERE ID=?', [ID], function(tx, rs)
                 {
                    var $var = [];
                    var id = ['member_count','family_name','date_profiled','nhts','nhts_no','four_ps',	
                        'address_houseno','address_street','address_purok','address_barangay',
                        'address_city_municipality','address_province','address_postal_code','contact','ip_group',	
                        'respondent','usual_hf_consult','usual_hf_travel_time','usual_hf_transpo','usual_hf_services_maternal',	
                        'usual_hf_services_child','usual_hf_services_surgery','usual_hf_services_lab','usual_hf_services_inpatient',	
                        'usual_hf_services_others_specify','usual_hf_pay_services_comm',
                        'usual_hf_pay_services_comm_specify','usual_hf_med_avail',
                        'usual_hf_med_not_avail','usual_hf_where_buy_med','usual_hf_pay_for_med',
                        'near_govt_hf','govt_hf_travel_time','govt_hf_transpo','govt_hf_services_maternal',
                        'govt_hf_services_child','govt_hf_services_surgery','govt_hf_services_lab',
                        'govt_hf_services_inpatient','govt_hf_services_others_specify',
                        'govt_hf_pay_services_comm','govt_hf_pay_services_comm_specify','govt_hf_med_avail',	
                        'govt_hf_med_not_avail','govt_hf_where_buy_med','govt_hf_pay_for_med',	
                        'near_pvt_hf','pvt_hf_travel_time','pvt_hf_transpo','pvt_hf_services_maternal',
                        'pvt_hf_services_child','pvt_hf_services_surgery','pvt_hf_services_lab',
                        'pvt_hf_services_inpatient','pvt_hf_services_others_specify','pvt_hf_med_avail',
                        'pvt_hf_med_not_avail','pvt_hf_where_buy_med','emergency_transpo_specify',
                        'drinking_bottled','drinking_refilling','drinking_nawasa','drinking_pump',
                        'drinking_dug','drinking_spring','drinking_others_specify','cooking_bottled','cooking_refilling',
                        'cooking_nawasa','cooking_pump','cooking_dug','cooking_spring','cooking_others_specify',	
                        'domestic_nawasa','domestic_pump','domestic_dug','domestic_spring','domestic_others_specify','own_toilet',
                        'water_sealed','no_toilet','garbage_collected','garbage_burned','garbage_dumped',
                        'garbage_others_specify','beside_highway','coastal_area','near_water',	
                        'hx_landslide','hx_flooding','near_mining','bgy_typhoon','hh_typhoon',	
                        'bgy_flooding','hh_flooding','hh_earthquake','near_evac_specify'];
                    
                    
                     for(var i=0;i< rs.rows.length;i++) {
                        
                            
                            for(var j=0; j < id.length; j++){
                                $var[j] = rs.rows.item(i)[id[j]];
                            }
                            
                            /*  var uuid = create_UUID();      
                             var member_count = rs.rows.item(i).member_count;
                             var family_name = rs.rows.item(i).family_name;
                             var address_houseno = rs.rows.item(i).address_houseno;
                             var address_street = rs.rows.item(i).address_street;
                             var address_purok = rs.rows.item(i).address_purok;
                             var address_barangay = rs.rows.item(i).address_barangay;
                             var address_city_municipality = rs.rows.item(i).address_city_municipality;
                             var address_province = rs.rows.item(i).address_province;
                             var address_postal_code = rs.rows.item(i).address_postal_code;
                             var contact = rs.rows.item(i).contact;
                             var ip_group = rs.rows.item(i).ip_group; */
                             
                            // alert(uuid + member_count+family_name+address_houseno+address_street+address_purok+address_barangay+address_city_municipality+address_province+address_postal_code+contact+ip_group);
                              
                             
                     } 
                            var $var_obj = {};
                                var $keys = [];
                                for(var i=0;i<id.length;i++){
                                    $keys[i] = 'key'+i;
                              
                                }
                                for(var i=0;i<id.length;i++){
                                    $var_obj[$keys[i]] = $var[i]; 
                                } 

                               
                                EditRecord($var_obj);
 
                     //alert(up_house_id.length);
                     
                   
                 }, function(tx, error) {
                   alert('Error fetching records: ' + error.message);
                 });
               });
 
             }

             
       //edit record long table household
           function EditRecord(data){
            $('#table_mamen').click();
            $('#show_back').click();
               let values = Object.values(data);
               
               var up_id = [];
            for (var i = 5; i <= 100; i++) {
                up_id[i] = 'test'+i;
            }

            var up_keys = ['Member no.','Family name','Date profiled',
            'NHTS?','NHTS no.',"4P's",'House #',
            'Street','Purok','Barangay','City/Municipal',
            'Province','Postal code','Contact','IP group',
            'Usual HF consult',
            'Travel time to usual HF','Transpo. to usual HF','Service maternal usual HF',
            'Service child usual HF','Service surgery usual HF','Survice laboratory usual HF',
            'Service inpatient usual HF','Service others specify',
            'Paid for service/commodity? (usual HF)','Paid for others specify (usual HF)','Medicines available? (usual HF)',
            'Medicines not available (usual HF)','Where buy med? (usual HF)','Pay for med? (usual HF)',
            'Government Facility','Travel time to Govn HF','Transpo. to Govn HF',
            'Service maternal govn HF','Service child govn HF','Service surgery govn HF',
            'Service laboratory govn HF','Service in-patient govn HF','Service others specify govn HF',
            'Paid for service/commodity? (govn HF)','Paid for others specify (govn HF)',
            'Medicines available? (govn HF)','Medicines not available (govn HF)','Where buy med? (govn HF)',
            'Pay for med? (govn HF)','Private Facility','Travel time to pvt HF',
            'Transpo. to pvt HF','Service maternal pvt HF','Service child pvt HF',
            'Service surgery pvt HF','Service laboratory pvt HF','Service in-patient pvt HF',
            'Service others specify pvt HF','Medicines available? (pvt HF)','Medicines not available (pvt HF)',
            'Where buy med? (pvt HF)','Emergency Transpo','Drinking bottled?',
            'Drinking refilling?','Drinking nawasa?','Drinking pump?',
            'Drinking dug?','Drinking spring?','Dringking others specify','Cooking bottled?',
            'Cooking refilling?','Cooking nawasa?','Cooking pump?','Cooking dug?',
            'Cooking spring?','Cooking others specify','Domestic nawasa?',
            'Domestic pump?','Domestic dug?','Domestic Spring',
            'Domestic others specify','Own a toilet?','Water sealed?',
            'No toilet','Garbage collected?','Garbage burned?','Garbage dumped?',
            'Garbage others specify','Beside highway?','Coastal area?','Near water?',
            'History of landslide?','History of flooding?','Near mining?','Barangay coming typhoon','Household coming typhoon',
            'Barangay flooding/flashfloods','Household flooding/flashfloods','Household earthquake','Nearest evacuation'];
            
            var editThis = "<table id='upTable' class='table'><thead><tr><th>Keys</th><th>Values &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th></tr></thead>";
                            for (var i=5;i<up_keys.length + 5 ;i++){
                                if (i==5 || i==13 || i==17 || i==18){
                                editThis += "<tbody><tr>";
                                editThis += "<td>" + up_keys[i-5]+ "</td>";
                                editThis += "<td><input type='number' class='form-control' id ="+up_id[i]+" value="+values[i-5]+" ></td>";
                                continue;
                                }   
                                else if(i==7){
                                editThis += "<tbody><tr>";
                                editThis += "<td>" + up_keys[i-5]+ "</td>";
                                editThis += "<td><input type='date' class='form-control' id ="+up_id[i]+" value="+values[i-5]+" ></td>";
                                continue;
                                }
                                else if(i==8 || i==10){
                                    if(values[i-5] === 'YES'){
                                        editThis += "<tbody><tr>";
                                        editThis += "<td>" + up_keys[i-5]+ "</td>";
                                        editThis += "<td><select  class='form-control' id ="+up_id[i]+"  ><option>"+values[i-5]+"<option>NO</option></select></td>";
                                        continue;
                                    }
                                    else{
                                        editThis += "<tbody><tr>";
                                        editThis += "<td>" + up_keys[i-5]+ "</td>";
                                        editThis += "<td><select  class='form-control' id ="+up_id[i]+"  ><option>"+values[i-5]+"<option>YES</option></select></td>";
                                        continue;
                                    }
                                
                                }
                                else if(i<=19){
                                editThis += "<tbody><tr>";
                                editThis += "<td>" + up_keys[i-5]+ "</td>";
                                editThis += "<td><input type='text' class='form-control' id ="+up_id[i]+" value="+values[i-5]+" ></td>";

                                }
                                else if(i==20){
                                editThis += "<tbody><tr>";
                                editThis += "<td>" + up_keys[i-5]+ "</td>";
                                editThis += "<td><input type='text' class='form-control' id ="+up_id[i]+" value="+values[16]+" ></td>";

                                    continue;
                                }
                                else if(i==23 || i==24 || i==25 || i==26 || i==27 || i==29 || i==31 || i==34 || i==38 || i==39 || i==40 || i==41 || i==42 || i==44 || i==46 || i==49 || i==53 || i==54 || i==55 || i==56 || i==57 || i==63 || i==64 || i==65 || i==66 || i==67 || i==68 || i==70 || i==71 || i==72 || i==73 || i==74 || i==75 || i==77 || i==78 || i==79 || i==80 || i==82 || i==83 || i==85 || i==86 || i==87 || i==89 || i==90 || i==91 || i==92 || i==93 || i==94){
                                    if(values[i-4] === 'YES'){
                                        editThis += "<tbody><tr>";
                                        editThis += "<td>" + up_keys[i-5]+ "</td>";
                                        editThis += "<td><select  class='form-control' id ="+up_id[i]+"  ><option>"+values[i-4]+"<option>NO</option></select></td>";
                                        continue;
                                    }
                                    else{
                                        editThis += "<tbody><tr>";
                                        editThis += "<td>" + up_keys[i-5]+ "</td>";
                                        editThis += "<td><select  class='form-control' id ="+up_id[i]+"  ><option>"+values[i-4]+"<option>YES</option></select></td>";
                                        continue;
                                    }
                                }
                                else{
                                editThis += "<tbody><tr>";
                                editThis += "<td>" + up_keys[i-5]+ "</td>";
                                editThis += "<td><input type='text' class='form-control' id ="+up_id[i]+" value="+values[i-4]+" ></td>";

                                }
                                /* else if (i==21){
                                    continue;
                                } */
                                
                                
                            }
            
            
                        editThis += "</table>";

            var button = document.getElementById('updateButton');

            button.innerHTML = "<div class='container'><div class='col-xs-12'><button class='form-control btn btn-primary' onclick='updateNak();'><span class='glyphicon glyphicon-floppy-save'</span></button></div></div>";

            var updateThis = document.getElementById("updateThis");

            updateThis.innerHTML = editThis;
            
            $('#showtable').hide();
            $('#showtable_members').hide();
            $('#search_div').hide();
            
                        
           }

           function Add_Member(ctrlReff) {
            ID = ctrlReff.parentElement.parentElement.children[5].innerHTML;
            var lastname = ctrlReff.parentElement.parentElement.children[8].innerHTML;
                $('#mamen').click();
                $('#show_back').click();
                $('#search_div').hide();
              

                $('#id_mamen').val(ID);
                $('#member_lastname').val(lastname);
               $('#showtable').hide();
               $('#showtable_members').hide();
           }

           function DeleteRecord(ctrlReff) {
            var hh = ctrlReff.parentElement.parentElement.children[8].innerHTML;
           
           
            if (confirm('Are you sure you want to delete household: '+ hh +'?')){

                ID = ctrlReff.parentElement.parentElement.children[5].innerHTML;
                var db = test.webdb.db;
                db.transaction(function(tx) {
                    tx.executeSql("Delete from households WHERE ID=?", [ID]);
                    tx.executeSql("Delete from member WHERE household_id=?", [ID]);
                }, function(error) {
                    console.log('Transaction ERROR: ' + error.message);
                }, function() {
                   
                    //Showvalues();
                    
                    
                    
                   
                });
                db.transaction(function(tx) {
                    tx.executeSql('SELECT * FROM member', [], function(tx, rs)
                    {
                        if (rs.rows.length === 0){
                            init();
                            $('#check_members').click();
                            $('#showtable_members').hide();
                        }
                        else{
                            init();
                            $('#check_members').click();
                            $('#showtable_members').show();
                        }
                    }, function(tx, error) {
                      alert('Error fetching records: ' + error.message);
                    });
                  });
                
            }
            else{}
            
           
        }

        function DeleteRecord_member(ctrlReff) {
            var mm = ctrlReff.parentElement.parentElement.children[4].innerHTML;
            if (confirm('Are you sure you want to delete member: '+ mm +'?')){
                ID = ctrlReff.parentElement.parentElement.children[2].innerHTML;
            var db = test.webdb.db;
            db.transaction(function(tx) {
                tx.executeSql("Delete from member WHERE ID=?", [ID]);
            }, function(error) {
                console.log('Transaction ERROR: ' + error.message);
            }, function() {
                alert("Record has been deleted successfully");
                //Showvalues();
                $('#check_members').click();
                init();
            });

            }
            else{}
            
        }



        /* function EditRecordTest_tenta(ctrlReff) {
            ID = ctrlReff.parentElement.parentElement.children[4].innerHTML;
            $('#table_mamen').click();
            var up_var = [];
            for (var i = 5; i <= 15; i++) {
                 up_var[i] = ctrlReff.parentElement.parentElement.children[i].innerHTML;
            }

            var up_id = [];
            for (var i = 5; i <= 15; i++) {
                up_id[i] = 'test'+i;
            }

            var up_keys = ['Member #', 'Family name', 'House #', 'Street', 'Purok', 'Barangay', 'City/Municipality', 'Province', 'Postal code', 'Contact #', 'IP group']
            
            var editThis = "<table id='upTable' class='table'><thead><tr><th>Keys</th><th>Values &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th></tr></thead>";
                            for (var i=5;i<=15;i++){

                                if (i==12){
                                    continue;
                                }
                                editThis += "<tbody><tr>";
                                editThis += "<td>" + up_keys[i-5]+ "</td>";
                                editThis += "<td><input type='text' class='form-control' id ="+up_id[i]+" value="+up_var[i]+" ></td>";
                            }
            
            
                        editThis += "</table>";

            var button = document.getElementById('updateButton');

            button.innerHTML = "<div class='container'><div class='col-xs-12'><button class='form-control btn btn-primary' onclick='updateNak_tenta();'><span class='glyphicon glyphicon-floppy-save'</span></button></div></div>";

            var updateThis = document.getElementById("updateThis");

            updateThis.innerHTML = editThis;
            
            $('#showtable').hide();
            $('#showtable_members').hide();
                          
        } */



        //Edit Recort on Member
        function EditRecordTest_member(ctrlReff) {
            ID = ctrlReff.parentElement.parentElement.children[2].innerHTML;
            $('#table_mamen_member').click();
            $('#show_back').click();
            var up_var = [];
            for (var i = 4; i <= 16; i++) {
                 up_var[i] = ctrlReff.parentElement.parentElement.children[i].innerHTML;
            }

            var up_id = [];
            for (var i = 4; i <= 16; i++) {
                up_id[i] = 'test_member'+i;
            }

            var up_keys = ['First name', 'Middle name', 'Last name', 'Ext. name', 'Birthday', 'Relationship', 'Sex', 'Occupation', 'Current year/s in address', 'Birthplace City/Municipality', 'Birthplace Province ', 'Phic status', 'Phic type'];
            
            

            var editThis = "<table id='upTable' class='table'><thead><tr><th>Keys</th><th>Values &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th></tr></thead>";
                            for (var i=4;i<=16;i++){
                                if(i==14){
                                    continue;
                                }
                                else if(i==8){
                                editThis += "<tbody><tr>";
                                editThis += "<td>" + up_keys[i-4]+ "</td>";
                                editThis += "<td><input type='date' class='form-control' id ="+up_id[i]+" value="+up_var[i]+"  ></td>";
                                    continue;
                                }
                                else if(i==12){
                                editThis += "<tbody><tr>";
                                editThis += "<td>" + up_keys[i-4]+ "</td>";
                                editThis += "<td><input type='number' class='form-control' id ="+up_id[i]+" value="+up_var[i]+" ></td>";
                                    continue;
                                }
                                editThis += "<tbody><tr>";
                                editThis += "<td>" + up_keys[i-4]+ "</td>";
                                editThis += "<td><input type='text' class='form-control' id ="+up_id[i]+" value="+up_var[i]+" ></td>";
                            }
            

                        editThis += "</table>";

            var button = document.getElementById('updateButton_member');

            button.innerHTML = "<div class='container'><div class='col-xs-12'><button class='form-control btn btn-primary' onclick='updateNak_member();'><span class='glyphicon glyphicon-floppy-save'</span></button></div></div>";

            var updateThis = document.getElementById("updateThis_member");

            updateThis.innerHTML = editThis;

            $('#showtable').hide();
            $('#showtable_members').hide();
            $('#search_div').hide();
                          
        } 
        
        //update long table
        function updateNak() {
           
            var up_id = [];
            for (var i = 5; i <= 100; i++) {
                up_id[i] = 'test'+i;
            }

            var new_var = [];
            for (i=5;i<=100;i++){
                 /* if (i==14){
                    new_var[14] = 'Nueva Vizcaya';
                    continue;
                }  */
                new_var[i] = document.getElementById(up_id[i]).value;
            }

           

            var db = test.webdb.db;
            db.transaction(function (tx){
                tx.executeSql('UPDATE households SET member_count=?, family_name=?, date_profiled=?, nhts=?, nhts_no=?, four_ps=?, address_houseno=?, address_street=?, address_purok=?, address_barangay=?, address_city_municipality=?, address_province=?, address_postal_code=?, contact=?, ip_group=?, usual_hf_consult=?, usual_hf_travel_time=?, usual_hf_transpo=?, usual_hf_services_maternal=?, usual_hf_services_child=?, usual_hf_services_surgery=?, usual_hf_services_lab=?, usual_hf_services_inpatient=?, usual_hf_services_others_specify=?, usual_hf_pay_services_comm=?, usual_hf_pay_services_comm_specify=?, usual_hf_med_avail=?, usual_hf_med_not_avail=?, usual_hf_where_buy_med=?, usual_hf_pay_for_med=?, near_govt_hf=?, govt_hf_travel_time=?, govt_hf_transpo=?, govt_hf_services_maternal=?, govt_hf_services_child=?, govt_hf_services_surgery=?, govt_hf_services_lab=?, govt_hf_services_inpatient=?, govt_hf_services_others_specify=?, govt_hf_pay_services_comm=?, govt_hf_pay_services_comm_specify=?, govt_hf_med_avail=?, govt_hf_med_not_avail=?, govt_hf_where_buy_med=?, govt_hf_pay_for_med=?, near_pvt_hf=?, pvt_hf_travel_time=?, pvt_hf_transpo=?, pvt_hf_services_maternal=?, pvt_hf_services_child=?, pvt_hf_services_surgery=?, pvt_hf_services_lab=?, pvt_hf_services_inpatient=?, pvt_hf_services_others_specify=?, pvt_hf_med_avail=?, pvt_hf_med_not_avail=?, pvt_hf_where_buy_med=?, emergency_transpo_specify=?, drinking_bottled=?, drinking_refilling=?, drinking_nawasa=?, drinking_pump=?, drinking_dug=?, drinking_spring=?, drinking_others_specify=?, cooking_bottled=?, cooking_refilling=?, cooking_nawasa=?, cooking_pump=?, cooking_dug=?, cooking_spring=?, cooking_others_specify=?, domestic_nawasa=?, domestic_pump=?, domestic_dug=?, domestic_spring=?, domestic_others_specify=?, own_toilet=?, water_sealed=?, no_toilet=?, garbage_collected=?, garbage_burned=?, garbage_dumped=?, garbage_others_specify=?, beside_highway=?, coastal_area=?, near_water=?, hx_landslide=?, hx_flooding=?, near_mining=?, bgy_typhoon=?, hh_typhoon=?, bgy_flooding=?, hh_flooding=?, hh_earthquake=?, near_evac_specify=? WHERE ID=?',
                [new_var[5], new_var[6], new_var[7], new_var[8], new_var[9], new_var[10], new_var[11], new_var[12], new_var[13], new_var[14], new_var[15], new_var[16], new_var[17], new_var[18], new_var[19], new_var[20], new_var[21], new_var[22], new_var[23], new_var[24], new_var[25], new_var[26], new_var[27], new_var[28], new_var[29], new_var[30], new_var[31], new_var[32], new_var[33], new_var[34], new_var[35], new_var[36], new_var[37], new_var[38], new_var[39], new_var[40], new_var[41], new_var[42], new_var[43], new_var[44], new_var[45], new_var[46], new_var[47], new_var[48], new_var[49], new_var[50], new_var[51], new_var[52], new_var[53], new_var[54], new_var[55], new_var[56], new_var[57], new_var[58], new_var[59], new_var[60], new_var[61], new_var[62], new_var[63], new_var[64], new_var[65], new_var[66], new_var[67], new_var[68], new_var[69], new_var[70], new_var[71], new_var[72], new_var[73], new_var[74], new_var[75], new_var[76], new_var[77], new_var[78], new_var[79], new_var[80], new_var[81], new_var[82], new_var[83], new_var[84], new_var[85], new_var[86], new_var[87], new_var[88], new_var[89], new_var[90], new_var[91], new_var[92], new_var[93], new_var[94], new_var[95], new_var[96], new_var[97], new_var[98], new_var[99], new_var[100], ID],
                test.webdb.onSuccess,
                test.webdb.onError);
            });

            $('#updateThis').hide();
            $('#showtable').show();
            $('#showtable_members').show();
            document.location.reload();
            
            

        }
        /* function updateNak_tenta() {
           
            var up_id = [];
            for (var i = 5; i <= 15; i++) {
                up_id[i] = 'test'+i;
            }

            var new_var = [];
            for (i=5;i<=15;i++){
                if (i==12){
                    new_var[12] = 'Nueva Vizcaya';
                    continue;
                }
                new_var[i] = document.getElementById(up_id[i]).value;
            }

            

            var db = test.webdb.db;
            db.transaction(function (tx){
                tx.executeSql('UPDATE households SET member_count=?, family_name=?, address_houseno=?, address_street=?, address_purok=?, address_barangay=?, address_city_municipality=?, address_province=?, address_postal_code=?, contact=?, ip_group=? WHERE ID=?',
                [new_var[5], new_var[6], new_var[7], new_var[8], new_var[9], new_var[10], new_var[11], new_var[12], new_var[13], new_var[14], new_var[15], ID],
                test.webdb.onSuccess,
                test.webdb.onError);
            });

            $('#updateThis').hide();
            $('#showtable').show();
            $('#showtable_members').show();
            document.location.reload();
            
            

        } */
        //UPDATE MEMBER
        function updateNak_member() {
            var up_id = [];
            for (var i = 4; i <= 16; i++) {
                up_id[i] = 'test_member'+i;
            }

            var new_var = [];
            for (i=4;i<=16;i++){
                if(i==14){
                    new_var[14] = 'Nueva Vizcaya';
                    continue;
                }
                new_var[i] = document.getElementById(up_id[i]).value;
            }

            

            var db = test.webdb.db;
            db.transaction(function (tx){
                tx.executeSql('UPDATE member SET FIRST_NAME=?, MIDDLE_NAME=?, LAST_NAME=?, EXTEND_NAME=?, BIRTHDAY=?, RELATIONSHIP=?, SEX=?, OCCUPATION=?, YEARS_IN_ADDRESS=?, BIRTH_CITY=?, BIRTH_PROVINCE=?, PHIC_STATUS=?, PHIC_TYPE=? WHERE ID=?',
                [new_var[4], new_var[5], new_var[6], new_var[7], new_var[8], new_var[9], new_var[10], new_var[11], new_var[12], new_var[13], new_var[14], new_var[15], new_var[16], ID],
                test.webdb.onSuccess,
                test.webdb.onError);
            });

            $('#updateThis').hide();
            $('#showtable').show();
            $('#showtable_members').show();
            document.location.reload();
            
            

        }


        
        function Upload(ctrlReff) {
            ID = ctrlReff.parentElement.parentElement.children[5].innerHTML;
            var $members = ctrlReff.parentElement.parentElement.children[6].innerHTML;
            
            //alert(ID+$members);
            var db = test.webdb.db;
            db.transaction(function(tx) {
                tx.executeSql('SELECT * FROM member WHERE household_id=?', [ID], function(tx, rs)
                {   
                    //alert(rs.rows.length);
                    if($members != rs.rows.length){
                        alert('No. of members should be: '+$members);
                        return;
                    }
                    else if (navigator.onLine) {
                
                        $('#modal_button').click();
                        $('#ctrlReff').val(ID);
                        
                    } else {
                        alert('Check your internet connection and try again.');
                        return;
                    }
                }, function(tx, error) {
                  alert('Error fetching records: ' + error.message);
                });
              });

          


            

            
           
            

            
         
                
            
        } 


        function addName_Member() {

                var fname = document.getElementById('member_firstname').value;
                var mname = document.getElementById('member_middlename').value;
                var rel = document.getElementById('member_relationship').value;
                var yia = document.getElementById('member_years_address').value;
                if (fname==='' || mname==='' || rel==='' || yia===''){
                    return;
                }
            
                var id = document.getElementById('id_mamen');
                // do something here
                var one = document.getElementById('member_firstname');
                var two = document.getElementById('member_middlename');
                var three = document.getElementById('member_lastname');
                var four = document.getElementById('mem_ext');
                var five = document.getElementById('member_birthdate');
                var six = document.getElementById('member_relationship');
                var seven = $("input[name='member_sex']:checked").val();
                var eight = document.getElementById('member_occupation');
                var nine = document.getElementById('member_years_address');
                var ten = document.getElementById('member_birthplace_municipality');
                var eleven = document.getElementById('member_birthplace_province');
                var twelve = document.getElementById('member_phil_status')
                var thirteen = document.getElementById('member_phil_type')
                
              test.webdb.addName_Member(id.value, one.value, two.value, three.value, four.value, five.value, six.value, seven, eight.value, nine.value, ten.value, eleven.value, twelve.value, thirteen.value);
               document.location.reload();
            
              

                
            }


            test.webdb.addName_Member = function(one_text, two_text, three_text, four_text, five_text, six_text, seven_int, eight_text, nine_text, ten_text, eleven_text, twelve_text, thirteen_text, fourteen_text) {
                var db  = test.webdb.db;
                db.transaction(function(tx){
                    tx.executeSql("INSERT INTO member(household_id, FIRST_NAME, MIDDLE_NAME, LAST_NAME, EXTEND_NAME, BIRTHDAY, RELATIONSHIP, SEX, OCCUPATION, YEARS_IN_ADDRESS, BIRTH_CITY, BIRTH_PROVINCE, PHIC_STATUS, PHIC_TYPE) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                     [one_text, two_text, three_text, four_text, five_text, six_text, seven_int, eight_text, nine_text, ten_text, eleven_text, twelve_text, thirteen_text, fourteen_text],
                     test.webdb.onSuccess,
                     test.webdb.onError);
                });
            }


            function aaron(wew,uploader,createdby){
                
                   
                var db = test.webdb.db;
                 
             
                db.transaction(function(tx) {
                    tx.executeSql('SELECT * FROM households WHERE ID=?', [wew], function(tx, rs)
                    {
                       var $var = [];
                       var id = ['member_count','family_name','date_profiled','nhts','nhts_no','four_ps',	
                           'address_houseno','address_street','address_purok','address_barangay',
                           'address_city_municipality','address_province','address_postal_code','contact','ip_group',	
                           'respondent','usual_hf_consult','usual_hf_travel_time','usual_hf_transpo','usual_hf_services_maternal',	
                           'usual_hf_services_child','usual_hf_services_surgery','usual_hf_services_lab','usual_hf_services_inpatient',	
                           'usual_hf_services_others_specify','usual_hf_pay_services_comm',
                           'usual_hf_pay_services_comm_specify','usual_hf_med_avail',
                           'usual_hf_med_not_avail','usual_hf_where_buy_med','usual_hf_pay_for_med',
                           'near_govt_hf','govt_hf_travel_time','govt_hf_transpo','govt_hf_services_maternal',
                           'govt_hf_services_child','govt_hf_services_surgery','govt_hf_services_lab',
                           'govt_hf_services_inpatient','govt_hf_services_others_specify',
                           'govt_hf_pay_services_comm','govt_hf_pay_services_comm_specify','govt_hf_med_avail',	
                           'govt_hf_med_not_avail','govt_hf_where_buy_med','govt_hf_pay_for_med',	
                           'near_pvt_hf','pvt_hf_travel_time','pvt_hf_transpo','pvt_hf_services_maternal',
                           'pvt_hf_services_child','pvt_hf_services_surgery','pvt_hf_services_lab',
                           'pvt_hf_services_inpatient','pvt_hf_services_others_specify','pvt_hf_med_avail',
                           'pvt_hf_med_not_avail','pvt_hf_where_buy_med','emergency_transpo_specify',
                           'drinking_bottled','drinking_refilling','drinking_nawasa','drinking_pump',
                           'drinking_dug','drinking_spring','drinking_others_specify','cooking_bottled','cooking_refilling',
                           'cooking_nawasa','cooking_pump','cooking_dug','cooking_spring','cooking_others_specify',	
                           'domestic_nawasa','domestic_pump','domestic_dug','domestic_spring','domestic_others_specify','own_toilet',
                           'water_sealed','no_toilet','garbage_collected','garbage_burned','garbage_dumped',
                           'garbage_others_specify','beside_highway','coastal_area','near_water',	
                           'hx_landslide','hx_flooding','near_mining','bgy_typhoon','hh_typhoon',	
                           'bgy_flooding','hh_flooding','hh_earthquake','near_evac_specify'];
                       
                       
                        for(var i=0;i< rs.rows.length;i++) {
                           
                               
                               for(var j=0; j < id.length; j++){
                                   $var[j] = rs.rows.item(i)[id[j]];
                               }
                                
                        }
                            var uuid = create_UUID(); 
                            
                               var $var_obj = {};
                                   var $keys = [];
                                   for(var i=0;i<id.length;i++){
                                       $keys[i] = 'key'+i;
                                 
                                   }
                                   for(var i=0;i<id.length;i++){
                                       $var_obj[$keys[i]] = $var[i]; 
                                   } 

                                   $var_obj.uuid = uuid;
                                   $var_obj.uploader = uploader;
                                   $var_obj.createdby = createdby;
                                   $var_obj.id = wew;
   
                                  house_upload($var_obj);
                                 
    
                        //alert(up_house_id.length);
                        
                      
                    }, function(tx, error) {
                      alert('Error fetching records: ' + error.message);
                    });
                  });

            }

            function aaron_bill(id,hhid){
                var db = test.webdb.db;
                 //MEMBER
                 db.transaction(function(tx) {
                     tx.executeSql('SELECT * FROM member WHERE household_id=?', [id], function(tx, rs)
                     {
                         
                         var index = 3;
                         var member_index;
                         for(var i=0;i< rs.rows.length;i++) {
     
                             
                                 //All db names are case-sensitive                            
                                  if (rs.rows.item(i).RELATIONSHIP == 'Head' || rs.rows.item(i).RELATIONSHIP == 'HEAD' || rs.rows.item(i).RELATIONSHIP == 'head'){
                                     member_index = 1;
                                     //alert('head');
                                 }
                                 else if(rs.rows.item(i).RELATIONSHIP == 'Wife' || rs.rows.item(i).RELATIONSHIP == 'WIFE' || rs.rows.item(i).RELATIONSHIP == 'wife'){
                                     member_index = 2;
                                     //alert('wife');
                                 } 
                                 else {
                                     //alert('member mamen');
                                     member_index = index;
                                     index++;
                                 }
     
                               
                                 
                                 var fname = rs.rows.item(i).FIRST_NAME;
                                 var mname = rs.rows.item(i).MIDDLE_NAME ;
                                 var lname = rs.rows.item(i).LAST_NAME;
                                 var extname = rs.rows.item(i).EXTEND_NAME;
                                 var bday = rs.rows.item(i).BIRTHDAY;
                                 var rel = rs.rows.item(i).RELATIONSHIP;
                                 var sex = rs.rows.item(i).SEX;
                                 var occ = rs.rows.item(i).OCCUPATION;
                                 var yia = rs.rows.item(i).YEARS_IN_ADDRESS;
                                 var bcity = rs.rows.item(i).BIRTH_CITY;
                                 var bprov = rs.rows.item(i).BIRTH_PROVINCE;
                                 var pstats = rs.rows.item(i).PHIC_STATUS;
                                 var ptype = rs.rows.item(i).PHIC_TYPE;
     
                                 
                                 member_upload(member_index,fname,mname,lname,extname,bday,rel,sex,occ,yia,bcity,bprov,pstats,ptype,hhid);
                                 
                                 //alert(member_index);
                              
     
                                 
                            
                         }
                        // alert(fnames);
                        
                        
                     }, function(tx, error) {
                       alert('Error fetching records: ' + error.message);
                     });
                   });
       
                   
               
                  // window.location.reload(1000);
                  
                 }

            

            function house_upload(data){
                $(document).ready(function(){
                    $.post( "https://ihps.app/testingdatasend",
                     {  id: data.id,
                        uuid: data.uuid,
                        member_count: data.key0,
                        family_name: data.key1,
                        date_profiled: data.key2,
                        nhts: data.key3,
                        nhts_no: data.key4,
                        four_ps: data.key5,
                        address_houseno: data.key6,
                        address_street: data.key7,
                        address_purok: data.key8,
                        address_barangay: data.key9,
                        address_city_municipality: data.key10,
                        address_province: data.key11,
                        address_postal_code: data.key12,
                        contact: data.key13,
                        ip_group: data.key14,
                        respondent: data.uploader,
                        usual_hf_consult: data.key16,
                        usual_hf_travel_time: data.key17,
                        usual_hf_transpo: data.key18,
                        usual_hf_services_maternal: data.key19,
                        usual_hf_services_child: data.key20,
                        usual_hf_services_surgery: data.key21,
                        usual_hf_services_lab: data.key22,
                        usual_hf_services_inpatient: data.key23,
                        usual_hf_services_others_specify: data.key24,
                        usual_hf_pay_services_comm: data.key25,
                        usual_hf_pay_services_comm_specify: data.key26,
                        usual_hf_med_avail: data.key27,
                        usual_hf_med_not_avail: data.key28,
                        usual_hf_where_buy_med: data.key29,
                        usual_hf_pay_for_med: data.key30,
                        near_govt_hf: data.key31,
                        govt_hf_travel_time: data.key32,
                        govt_hf_transpo: data.key33,
                        govt_hf_services_maternal: data.key34,
                        govt_hf_services_child: data.key35,
                        govt_hf_services_surgery: data.key36,
                        govt_hf_services_lab: data.key37,
                        govt_hf_services_inpatient: data.key38,
                        govt_hf_services_others_specify: data.key39,
                        govt_hf_pay_services_comm: data.key40,
                        govt_hf_pay_services_comm_specify: data.key41,
                        govt_hf_med_avail: data.key42,
                        govt_hf_med_not_avail: data.key43,
                        govt_hf_where_buy_med: data.key44,
                        govt_hf_pay_for_med: data.key45,
                        near_pvt_hf: data.key46,
                        pvt_hf_travel_time: data.key47,
                        pvt_hf_transpo: data.key48,
                        pvt_hf_services_maternal: data.key49,
                        pvt_hf_services_child: data.key50,
                        pvt_hf_services_surgery: data.key51,
                        pvt_hf_services_lab: data.key52,
                        pvt_hf_services_inpatient: data.key53,
                        pvt_hf_services_others_specify: data.key54,
                        pvt_hf_med_avail: data.key55,
                        pvt_hf_med_not_avail: data.key56,
                        pvt_hf_where_buy_med: data.key57,
                        emergency_transpo_specify: data.key58,
                        drinking_bottled: data.key59,
                        drinking_refilling: data.key60,
                        drinking_nawasa: data.key61,
                        drinking_pump: data.key62,
                        drinking_dug: data.key63,
                        drinking_spring: data.key64,
                        drinking_others_specify: data.key65,
                        cooking_bottled: data.key66,
                        cooking_refilling: data.key67,
                        cooking_nawasa: data.key68,
                        cooking_pump: data.key69,
                        cooking_dug: data.key70,
                        cooking_spring: data.key71,
                        cooking_others_specify: data.key72,
                        domestic_nawasa: data.key73,
                        domestic_pump: data.key74,
                        domestic_dug: data.key75,
                        domestic_spring: data.key76,
                        domestic_others_specify: data.key77,
                        own_toilet: data.key78,
                        water_sealed: data.key79,
                        no_toilet: data.key80,
                        garbage_collected: data.key81,
                        garbage_burned: data.key82,
                        garbage_dumped: data.key83,
                        garbage_others_specify: data.key84,
                        beside_highway: data.key85,
                        coastal_area: data.key86,
                        near_water: data.key87,
                        hx_landslide: data.key88,
                        hx_flooding: data.key89,
                        near_mining: data.key90,
                        bgy_typhoon: data.key91,
                        hh_typhoon: data.key92,
                        bgy_flooding: data.key93,
                        hh_flooding: data.key94,
                        hh_earthquake: data.key95,
                        near_evac_specify: data.key96,
                        createdby: data.createdby

                        
                    })
                    .done(function( data ) {
                    
                    aaron_bill(data.id, data.last_id);

                    disabled(data.id,data.status);

                    alert('Household ' + data.hh +" upload successful.");
                    
                    init();
                    $('#check_members').click();
                    })
                    .fail(function() {
                        alert( "Upload failed! Check Internet Connection" );
                    })

                    

            }); 
            }

            function disabled(id,status){
                var db = test.webdb.db;
                db.transaction(function (tx){
                tx.executeSql('UPDATE households SET status=? WHERE ID=?',
                [status, id],
                test.webdb.onSuccess,
                test.webdb.onError);
            });
            /* setTimeout(function(){
                
             }, 3000); */
            }

            function member_upload(one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen){
                $(document).ready(function(){
                    $.post( "https://ihps.app/testingdatamember",
                     { mm_index: one,
                      mm_fname: two,
                      mm_mname: three,
                      mm_lname: four,
                      mm_extname: five,
                      mm_bday: six,
                      mm_rel: seven,
                      mm_sex:eight,
                      mm_occ: nine,
                      mm_yia: ten,
                      mm_bcity: eleven,
                      mm_bprov: twelve,
                      mm_pstats: thirteen,
                      mm_ptype: fourteen,
                      mm_hhid: fifteen,
                      
                        })
                    .done(function( data ) {
                    alert( "Uploaded: \nMember " + data.fname + " of Household " + data.lname+"."  );
                    })
                    .fail(function() {
                        alert( "Upload failed! Check Internet Connection" );
                    });

            }); 
            }

            function create_UUID(){
                var dt = new Date().getTime();
                var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                    var r = (dt + Math.random()*16)%16 | 0;
                    dt = Math.floor(dt/16);
                    return (c=='x' ? r :(r&0x3|0x8)).toString(16);
                });
                return uuid;

                
                    }

           

                   
                    
                    