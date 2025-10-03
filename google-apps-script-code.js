function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSheet();

    var name = e.parameter.Name || "";
    var gmail = e.parameter.Gmail || "";
    var resumeFileName = e.parameter.ResumeFileName || "resume.pdf";
    var resumeBase64 = e.parameter.ResumeBase64 || "";
    var resumeType = e.parameter.ResumeType || "application/pdf";
    var resumeSize = e.parameter.ResumeSize || "0 MB";

    Logger.log("Received data - Name: " + name + ", Email: " + gmail);
    Logger.log("Resume file name: " + resumeFileName);
    Logger.log("Resume base64 length: " + resumeBase64.length);

    var resumeLink = "No file uploaded";

    // Check if base64 data exists and has content
    if (resumeBase64 && resumeBase64.length > 0) {
      try {
        Logger.log("Processing resume upload...");
        
        var folderName = "Job BotX Resumes";
        var folders = DriveApp.getFoldersByName(folderName);
        var folder = folders.hasNext() ? folders.next() : DriveApp.createFolder(folderName);

        // Clean the base64 string (remove any whitespace)
        var cleanBase64 = resumeBase64.replace(/\s/g, '');
        
        // Create unique filename with sanitized name
        var sanitizedName = sanitizeFileName(name);
        var uniqueFileName = sanitizedName + "_" + new Date().getTime() + "_" + resumeFileName;
        
        Logger.log("Creating file: " + uniqueFileName);

        // Decode base64 and create blob
        var decodedData = Utilities.base64Decode(cleanBase64);
        var blob = Utilities.newBlob(decodedData, resumeType, uniqueFileName);

        // Upload to Drive
        var file = folder.createFile(blob);
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

        resumeLink = "https://drive.google.com/file/d/" + file.getId() + "/view?usp=sharing";
        Logger.log("File uploaded successfully: " + resumeLink);
        
      } catch (uploadError) {
        Logger.log("Error uploading file: " + uploadError.toString());
        resumeLink = "Upload failed: " + uploadError.toString();
      }
    } else {
      Logger.log("No resume data received");
    }

    // Write to sheet
    var nextRow = sheet.getLastRow() + 1;
    sheet.getRange(nextRow, 1).setValue(name);
    sheet.getRange(nextRow, 2).setValue(gmail);
    sheet.getRange(nextRow, 3).setValue(resumeLink);
    sheet.getRange(nextRow, 4).setValue(new Date());
    sheet.getRange(nextRow, 5).setValue(resumeSize);

    Logger.log("Data written to sheet at row: " + nextRow);

    return ContentService.createTextOutput(
      JSON.stringify({ 
        status: "success", 
        resumeLink: resumeLink,
        message: "Form submitted successfully"
      })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log("Error in doPost: " + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({ 
        status: "error", 
        message: error.toString() 
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

  function sanitizeFileName(name) {
    return name.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 50);
  }
  