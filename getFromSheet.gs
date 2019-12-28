function gs_getTasksFromSheet() {
  
  var spreadsheet        = SpreadsheetApp.getActiveSpreadsheet(),
      sheet     = spreadsheet.getSheetByName( "data_cache" ),
      task_values = sheet.getRange("A1:A").getValues(),
      arr_tasks    = []
  
  for ( var i = 0; i < task_values.length; i++ ) {
    var t = task_values[i][0]
    
    if ( t != "" ) {
    
      var task_val = task_values[i][0]
      arr_tasks.push( task_val )
    }
  }
      
  return arr_tasks;
  
  
}

function gs_getDescriptionFromSheet(task_id, valueNeeded){
  var spreadsheet        = SpreadsheetApp.getActiveSpreadsheet(),
      sheet     = spreadsheet.getSheetByName( "log" ),
      task_ids = sheet.getRange("C2:C").getValues(),
      description    = "",
      arr_locations_metric_ids = []
  
  for ( var i = 0; i < task_ids.length; i++ ) {
    var ids = task_ids[i][0]
    if ( ids == task_id ) {
      var task_val = "D" + (i+2);
      arr_locations_metric_ids.push(task_val);
    }
  }
    var metrics = sheet.getRange(arr_locations_metric_ids[0] + ":" + arr_locations_metric_ids[arr_locations_metric_ids.length-1]).getValues()
      for ( var i = 0; i < metrics.length; i++ ) {
        var metric_vals = metrics[i][0]
        if(metric_vals == valueNeeded){
          var new_metric_location = arr_locations_metric_ids[i].slice( 1 );
          var metric_location = ("E" + new_metric_location)
          description = sheet.getRange(metric_location).getValue();
          return description;
        } 
  }
}

function gs_deleteTask(task_id){
  var spreadsheet        = SpreadsheetApp.getActiveSpreadsheet(),
      sheet     = spreadsheet.getSheetByName( "data_cache" ),
      task = sheet.getRange("A1:A").getValues()
  
  for ( var i = 0; i < task.length; i++ ) {
    var t = task[i][0]
    if ( t == task_id ) {
      var task_val = "A" + (i+1);
      sheet.getRange(task_val).clearContent();
      break;
    }
  }
    
 
}

function gs_getLiveTasksFromSheet() {
  
  var spreadsheet        = SpreadsheetApp.getActiveSpreadsheet(),
      sheet     = spreadsheet.getSheetByName( "live_tasks" ),
      task_values = sheet.getRange("A1:A").getValues(),
      arr_tasks    = []
  
  for ( var i = 0; i < task_values.length; i++ ) {
    var t = task_values[i][0]
    
    if ( t != "" ) {
    
      var task_val = task_values[i][0]
      arr_tasks.push( task_val )
    }
  }
    
  
  return arr_tasks;
  
  
}

function gs_deleteLiveTask(task_id){
  var spreadsheet        = SpreadsheetApp.getActiveSpreadsheet(),
      sheet     = spreadsheet.getSheetByName( "live_tasks" ),
      task = sheet.getRange("A1:A").getValues()
  
  for ( var i = 0; i < task.length; i++ ) {
    var t = task[i][0]
    if ( t == task_id ) {
      var task_val = "A" + (i+1);
      sheet.getRange(task_val).clearContent();
    }
  }
    
 
}







