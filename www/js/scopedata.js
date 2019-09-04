angular.module('demoApp', [])

.controller('mainController', MainController);

function MainController($scope){
    $scope.years = range_years_in_home();
    $scope.travel_time = range_travel_time();

    $scope.date_time = {
        startdatefromcontroller: new Date()
      };

    $scope.travel_by = [
        {value: 'N/A', label: 'Select'},
        { value: "Walking",label:'Walking'},{ value: "Tricycle",label:'Tricycle'},{ value: "Motorcycle",label:'Motorcycle'},
        { value: "Jeepney",label:'Jeepney'},{ value: "4-Wheels",label:'4 Wheels'}
    ]

    $scope.civil_status = [
        { value: "Single"},
        { value: "Married"},
        { value: "Divorced"},
        { value: "Separated"},
        { value: "Separated-and-living-with-partner"},
        { value: "Widowed"}
    ]

    $scope.no_members = [
        {value: '', label: 'Select'},
        { value: '2', label: '2 Members'},
        { value: '3', label: '3 Members'},{ value: '4', label: '4 Members'},
        { value: '5', label: '5 Members'},{ value: '6', label: '6 Members'},
        { value: '7', label: '7 Members'},{ value: '8', label: '8 Members'},
        { value: '9', label: '9 Members'},{ value: '10', label: '10 Members'},
        { value: '11', label: '11 Members'},{ value: '12', label: '12 Members'},
        { value: '13', label: '13 Members'},
    ]

    $scope.relationship = [
        { value: "HEAD"},
        { value: "WIFE"},
        { value: "SON"},
        { value: "DAUGHTER"},
        { value: "LIVE-IN-PARTNER"},
        { value: "STEP-DAUGHTER"},
        { value: "STEP-SON"},
    ]

    $scope.name_extension = [
        {value: 'N/A', label: 'none'},
        {value: 'Jr', label: 'Jr'}, {value: 'Sr', label: 'Sr'}, {value: 'I', label: 'I'},
        {value: 'II', label: 'II'}, {value: 'III', label: 'III'}, {value: 'IV', label: 'IV'},
        
        
    ]

    $scope.HF_usually_go_for_consult = [
        {value: '', label: 'Select'},
        {value: 'RHU', label: 'RHU'},{value:'BHS' , label: 'BHS'}, {value:'Govt-hospital', label: 'Govt hospital'},{value:'Private-facility', label: 'Private facility'},
        {value:'Traditional-healer', label: 'Traditional healer'}
    ]

    $scope.HF_govt_go_for_consult = [
        {value: '', label: 'Select'},{value: 'NUEVA-VIZCAYA-PROVINCIAL-HOSPITAL', label: 'NUEVA VIZCAYA PROVINCIAL HOSPITAL'},{value: 'VETERANS REGIONAL HOSPITAL', label: 'VETERANS REGIONAL HOSPITAL'},
        {value: 'RHU-BAMBANG', label: 'RHU BAMBANG'},
        { value: "ABIAN-BHS", label:'ABIAN BHS'},{ value: "ALIAGA-BHS", label:'ALIAGA BHS'},{ value: "ALMAGUER-NORTH-BHS", label:'ALMAGUER NORTH BHS'},
        { value: "ALMAGUER-SOUTH-BHS", label:'ALMAGUER SOUTH BHS'},{ value: "BANGGOT-BHS", label:'BANGGOT BHS'},
        { value: "BARAT-BHS", label:'BARAT BHS'},{ value: "BUAG-BHS", label:'BUAG BHS'},{ value: "CALAOCAN-BHS", label:'CALAOCAN BHS'},
        { value: "DULLAO-BHS", label:'DULLAO BHS'},{ value: "HOMESTEAD-BHS", label:'HOMESTEAD BHS'},
        { value: "INDIANA-BHS", label:'INDIANA BHS'},{ value: "MABUSLO-BHS", label:'MABUSLO BHS'},
        { value: "MACATE-BHS", label:'MACATE BHS'},{ value: "MAGSAYSAY-HILL-BHS", label:'MAGSAYSAY HILL BHS'},
        { value: "MANAMTAM-BHS", label:'MANAMTAM BHS'},{ value: "MAUAN-BHS", label:'MAUAN BHS'},
        { value: "PALLAS-BHS", label:'PALLAS BHS'},{ value: "SALINAS-BHS", label:'SALINAS BHS'},
        { value: "SAN-ANTONIO-NORTH-BHS", label:'SAN ANTONIO NORTH BHS'},{ value: "SAN-ANTONIO-SOUTH-BHS", label:'SAN ANTONIO SOUTH BHS'},
        { value: "SAN-FERNANDO-BHS", label:'SAN FERNANDO BHS'},{ value: "SAN-LEONARDO-BHS", label:'SAN LEONARDO BHS'},
        { value: "STO-DOMINGO-PROPER-BHS", label:'STO DOMINGO PROPER BHS'},{ value: "STO-DOMINGO-WEST-BHS", label:'STO DOMINGO WEST BHS'}
    ]

    $scope.birthdate_month = [
        { value: "January"},{ value: "February"},
        { value: "March"},{ value: "April"},
        { value: "May"},{ value: "June"},
        { value: "July"},{ value: "August"},
        { value: "September"},{ value: "October"},
        { value: "November"},{ value: "December"},
    ]

    $scope.birthdate_day = range_day();

    $scope.birthdate_year = range_year();

    $scope.Phil_status = [
        { value: "Member"},{value: "Dependent"},
        {value: "Non-member"},{value: "Not-assessed"},
        {value: "For-followup"}
    ]
    $scope.Phil_type = [
        { value: "Sponsored-DOH"},{value: "Dependent"},
        {value: "Self-employed"},{value: "Employed-Private"},
        {value: "Sponsored-Hospital"},{value: "For-followup"},
        {value: "NO"},{value: "Lifetime"},{value: "Not-Specified"},
        {value: "OFW"},{value: "Private"},{value: "DOH"},
        {value: "MLGU"},{value: "NHTS"}
    ]

    $scope.Address_Barangay = [
        {value: '', label: 'Select'},
        { value: "ABIAN", label: 'ABIAN'},{ value: "ALIAGA",label: 'ALIAGA'},{ value: "ALMAGUER-NORTH",label: 'ALMAGUER-NORTH'},
        { value: "ALMAGUER-SOUTH",label: 'ALMAGUER-SOUTH'},{ value: "BANGGOT",label: 'BANGGOT'},
        { value: "BARAT", label: 'BARAT'},{ value: "BUAG", label: 'BUAG'},{ value: "CALAOCAN", label: 'CALAOCAN'},
        { value: "DULLAO", label: 'DULLAO'},{ value: "HOMESTEAD", label: 'HOMESTEAD'},
        { value: "INDIANA", label: 'INDIANA'},{ value: "MABUSLO", label: 'MABUSLO'},
        { value: "MACATE", label: 'MACATE'},{ value: "MAGSAYSAY-HILL", label: 'MAGSAYSAY-HILL'},
        { value: "MANAMTAM", label: 'MANAMTAM'},{ value: "MAUAN", label: 'MAUAN'},
        { value: "PALLAS", label: 'PALLAS'},{ value: "SALINAS", label: 'SALINAS'},
        { value: "SAN-ANTONIO-NORTH", label: 'SAN-ANTONIO-NORTH'},{ value: "SAN-ANTONIO-SOUTH", label: 'SAN-ANTONIO-SOUTH'},
        { value: "SAN-FERNANDO", label: 'SAN-FERNANDO'},{ value: "SAN-LEONARDO", label: 'SAN-LEONARDO'},
        { value: "STO-DOMINGO-PROPER", label: 'STO-DOMINGO-PROPER'},{ value: "STO-DOMINGO-WEST", label: 'STO-DOMINGO-WEST'}
    ]
    
    $scope.ip_group = [
        {value: '', label: 'Select'},
        { value: "Apayao" , label: 'Apayao'},{ value: "Itneg", label: 'Itneg'},{ value: "Kalinga", label: 'Kalinga'},
        { value: "Bontoc", label: 'Bontoc'},{ value: "Ibaloi", label: 'Ibaloi'},{ value: "Kangkana-ey", label: 'Kangkana'},
        { value: "Kalanguya", label: 'Kalanguya'},{ value: "Ilongot", label: 'Ilongot'},{ value: "Mangyan", label: 'Mangyan'},
    ]
}

function range_year(){
    var data = [];
    for (var i = 1900; i <= 2019; i++){
        var newtest = {
            value: i
        }
        data.push(newtest);
    }
    return data;
}
function range_day(){
    var data = [];
    for (var i = 1; i <= 32; i++){
        var newtest = {
            value: i
        }
        data.push(newtest);
    }
    return data;
}

function range_years_in_home(){
    var data = [];
    for (var i = 1; i <= 100; i++){
        var newtest = {
            label: i + " years",
            value: i
        }
        data.push(newtest);
    }
    return data;
}

function range_travel_time(){
    var data = [];
    var pelo = {value: 'N/A', label:'Select'};
    data.push(pelo);
    for (var i = 2; i <= 100; i++){
        var newtest = {
            value: i + "-mins",
            label: i + " minutes"
            
        }
        data.push(newtest);
    }
    return data;
}



