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

            function datoy(wew){
                document.getElementById('atoy').innerHTML=wew;
            }
            function datoy_mem(wew){
                //document.getElementById('atoy_members').innerHTML=wew;
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
                    if(rs.rows.length === 0){
                        $('#bgy_hh').hide();
                        $('#show_records').hide();
                    }
                    var fam_obj = {};
                    var hhid_obj = {};
                    var $fams = [];
                    var $id = [];
                    for (var i = 0; i <rs.rows.length;i++){
                        $fams[i] = 'fam'+i;
                        $id[i] = 'hhid'+i;
                    }
                    var var_bgy = ['ABIAN','ALIAGA','ALMAGUER-NORTH','ALMAGUER-SOUTH',
                        'BANGGOT','BARAT','BUAG','CALAOCAN','DULLAO','HOMESTEAD','INDIANA',
                        'MABUSLO','MACATE','MAGSAYSAY-HILL','MANAMTAM','MAUAN','PALLAS',
                        'SALINAS','SAN-ANTONIO-NORTH','SAN-ANTONIO-SOUTH','SAN-FERNANDO',
                        'SAN-LEONARDO','STO-DOMINGO-PROPER','STO-DOMINGO-WEST'];
                        var id = [];
                        for (var i = 0;i < var_bgy.length; i++){
                            id[i] = 0;
                        }
                    var list_test = document.getElementById('accordion');
                    var list_test_data = '';
                     var list = document.getElementById("list-group");
                    var list_data = ''; 
                    /* var strData = "<thead><tr><th>Delete</th><th>Update</th><th>Add Member</th><th>Upload</th><th>ID</th><th>Members</th><th>Date profiled</th><th>Family name</th><th>House no.</th><th>Street</th><th>Purok</th><th>Barangay</th><th>City/Municipality</th><th>Province</th><th>Postal code</th><th>Contact #</th><th>IP group</th></tr></thead>"; */
                    var bgy = [];
                    for(var i=0;i< rs.rows.length;i++) {
                        bgy[i] = rs.rows.item(i).address_barangay;
                       
                            fam_obj[$fams[i]] = rs.rows.item(i).family_name;
                            hhid_obj[$id[i]] = rs.rows.item(i).ID;
                            
                            for(var j = 0; j < var_bgy.length; j++){
                            if (rs.rows.item(i).address_barangay === var_bgy[j]){
                                id[j] += 1;
                            }
                            
                            else{}
                        }
                            
                    }
                    var collapse_in='';
                    for (var i = 0; i < var_bgy.length ;i++){
                        if (id[i] === 0){
                            continue;
                        }
                        
                        /* if (var_bgy[i] === ''){
                            var_bgy[i] = 'No barangay';
                            
                            list_data += "<li class='list-group-item'>"+var_bgy[i]+"<span class='badge'>"+id[i]+"</span></li>"
                        list_test_data += "<div class='panel panel-default'>" +
                        "<div class='panel-heading'>" +
                            "<h5 class='panel-title'>" +
                                "<a class='list-group-item' data-toggle='collapse' data-parent='#accordion' "+
                            "href='#No'>"+var_bgy[i]+"<span class='badge'>"+id[i]+"</span></a>"+
                            "</h5>"+
                        "</div>"+
                        
                        "<div id='No' class='panel-collapse collapse'"+collapse_in+">"+
                        "<div class='panel-body'>"+
                        "<div class='well'>"+
                        "<ul class='list-group' id='no_bgy'></ul>"+
                        
                            "<p class='center_mo'>BULAGA!</p>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>"
                continue;
                        } */
                        
                        list_data += "<li class='list-group-item'>"+var_bgy[i]+"<span class='badge'>"+id[i]+"</span></li>"
                        list_test_data += "<div class='panel panel-default'>" +
                        "<div class='panel-heading'>" +
                            "<h5 class='panel-title'>" +
                                "<a class='list-group-item' data-toggle='collapse' data-parent='#accordion' "+
                            "href="+'#'+var_bgy[i]+">"+var_bgy[i]+"<span class='badge'>"+id[i]+"</span></a>"+
                            "</h5>"+
                        "</div>"+
                        
                        "<div id="+var_bgy[i]+" class='panel-collapse collapse'"+collapse_in+">"+
                        "<div class='panel-body'>"+
                        "<div class='well'>"+
                        "<ul class='list-group' id="+var_bgy[i]+i+"></ul>"+
                        
                           
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>"

                        
                
                    }
                    
                    list_test.innerHTML = list_test_data;
                    
                    // list-group data -- list.innerHTML = list_data;

                    //family name
                    
                    //alert(id);
                    //list_data += "<li class='list-group-item'>"+rs.rows.item(i).address_barangay+"<span class='badge'>15</span></li>"
                     /* list.innerHTML = list_data;  */
                    if (rs.rows.length==0){
                        var no = '0';
                    }else{
                        var no = rs.rows.length;
                    }
                    datoy(no);
                    
                    wew(fam_obj,bgy,var_bgy,hhid_obj);
                      
                 
                }, function(tx, error) {
                  alert('Error fetching records: ' + error.message);
                });
              });

           
           


           }


               // MEMBERS
           function wew(data,bgy,var_bgy,hhid){
            //household,barangay,all_barangays,hhid
            //var id_list = getID(var_bgy,bgy);
            
            let values_hhid = Object.values(hhid);
            var list_data = [];
            var list = [];
            let hh = Object.values(data);
           
            
            for (var k = 0; k<var_bgy.length;k++){
                list_data[k] = '';
                list[k] ='';
            }
            for (var k = 0; k<var_bgy.length;k++){
                if (var_bgy[k] === 'No barangay'){
                    list[k] = document.getElementById('no_bgy');
                    continue;
                }
                list[k] = document.getElementById(var_bgy[k]+k);
            }

            
            for (var k = 0; k<var_bgy.length;k++){
                if(list[k] == null){
                    list[k] ='';
                }
            }
            
            
            //alert(id_list[1]);
            /* var test = document.getElementById('accordion').innerHTML;
            alert(test); */
            var db = test.webdb.db;
              //alert(bgy);
            let values = Object.values(data);
            //alert(values);
            
            //alert(bgy);
            //alert(bgy);
            /* var list = document.getElementById('member_list');
            var list_data = ''; */

              db.transaction(function(tx) {
                tx.executeSql('SELECT * FROM member', [], function(tx, rs)
                {  
                    var no_mem = [];
                    for(var i=0;i< values.length;i++) {
                       no_mem[i] = 0;
                    }

                    for(var i=0;i< rs.rows.length;i++) {
                        for (var j = 0; j < values.length; j++){
                            if (rs.rows.item(i).LAST_NAME === values[j] && rs.rows.item(i).household_id === values_hhid[j]){
                                no_mem[j] += 1;
                            }
                            else{
                            }
                        }


                        
                        // list per inside
                        

                       // if (bgy[i] === )
                    }

                    

              /*    
                    var id_list_data = [];
                    for (var i = 0; i<var_bgy.length;i++){
                        if (id_list[i]==null){
                            continue;
                        }
                        id_list_data[i] = '';
                    }
                    
 */
                    for (var k = 0; k<bgy.length;k++){
                for (var j = 0; j<var_bgy.length;j++){
                    if(bgy[k] === var_bgy[j]){
                        
                        list_data[j]  += "<li class='list-group-item'>"+hh[k]+"</span><span class='badge'>"+no_mem[k]+"</span></li>"
                    }
                }
            }


                    /* for (var i = 0; i < Object.entries(data).length; i++){
                        list_data += "<li class='list-group-item'>"+values[i]+"</span><span class='badge'>"+no_mem[i]+"</span></li>"
                        
                    
                        
                        
                               //id_list_data[i] += "<li class='list-group-item'>"+values[i]+"</span><span class='badge'>"+no_mem[i]+"</span></li>"
                               //alert(id_list_data[i]);
                    } */

                   /*  for (var i = 0; i < bgy.length;i++){
                        if (id_list[i] == null){
                            id_list_data[i+1] += id_list_data[i]; 
                            continue;
                        }
                        id_list[i].innerHTML = id_list_data[i];
                        
                    } 

                    

                    alert(id_list[0]); */

                    for (var k=0;k<var_bgy.length;k++){
                        if (list[k] === ''){
                            continue;
                        }
                        list[k].innerHTML = list_data[k];

                    }
     
                   //list-group data list.innerHTML = list_data;
                  
                    if (rs.rows.length==0){
                        var no = '0';
                    }else{
                        var no = rs.rows.length;
                    }
                    //datoy_mem(no);

                    

                 
                }, function(tx, error) {
                  alert('Error fetching records: ' + error.message);
                });
              });
             
               
               
           }

           function getDistinctArray(arr) {
            var compareArray = new Array();
            if (arr.length > 1) {
                for (i = 0;i < arr.length;i++) {
                    if (compareArray.indexOf(arr[i]) == -1) {
                        compareArray.push(arr[i]);
                    }
                }
            }
            return compareArray;
        }



           