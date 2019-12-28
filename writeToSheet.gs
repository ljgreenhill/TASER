function gs_addMatchMetric( gs_arr_metric_data ) {


  var spreadsheet       = SpreadsheetApp.getActiveSpreadsheet(),
      tab   = spreadsheet.getSheetByName( "log" )
  
  var lock   = LockService.getScriptLock(),
      unlock = lock.tryLock(15000);
  
  if ( unlock ) {
  
    tab.appendRow( gs_arr_metric_data );
    
    SpreadsheetApp.flush();
    
   
    lock.releaseLock();

  } else {
   
    Logger.log('Could not obtain lock after 15 seconds.');
    
  }
  
}

function gs_storeAvailableTasks( gs_arr_metric_data ) {
  var spreadsheet       = SpreadsheetApp.getActiveSpreadsheet(),
      tab   = spreadsheet.getSheetByName( "data_cache" )
  
  var lock   = LockService.getScriptLock(),
      unlock = lock.tryLock(15000);
  
  if ( unlock ) {
  
    for ( var i = 0; i < gs_arr_metric_data.length; i++ ) {
        
      tab.appendRow( [gs_arr_metric_data[i]]);

    }
    
    SpreadsheetApp.flush();
    
   
    lock.releaseLock();

  } else {
   
    Logger.log('Could not obtain lock after 15 seconds.');
    
  }
  
}
function gs_addLiveTask( gs_arr_metric_data ) {
  var spreadsheet       = SpreadsheetApp.getActiveSpreadsheet(),
      sheet  = spreadsheet.getSheetByName( "live_tasks" ),
      task_values = sheet.getRange("A1:A").getValues()

    Logger.log("writing value")
    var lock   = LockService.getScriptLock(),
        unlock = lock.tryLock(15000);
  
    if ( unlock ) {
  
        
       sheet.appendRow( [gs_arr_metric_data]);

    
    
      SpreadsheetApp.flush();
    
   
      lock.releaseLock();

    } else {
   
      Logger.log('Could not obtain lock after 15 seconds.');
    
    }
}

function gs_storeCompletedTasks( gs_arr_metric_data ) {
  Logger.log("Writing to sheet")
  var spreadsheet       = SpreadsheetApp.getActiveSpreadsheet(),
      tab   = spreadsheet.getSheetByName( "completed_tasks" )
  
  var lock   = LockService.getScriptLock(),
      unlock = lock.tryLock(15000);
  
  if ( unlock ) {
  
   
        
      tab.appendRow( [gs_arr_metric_data]);

    
    
    SpreadsheetApp.flush();
    
   
    lock.releaseLock();

  } else {
   
    Logger.log('Could not obtain lock after 15 seconds.');
    
  }
  
}
