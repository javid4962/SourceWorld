import  { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker'


function DrivePicker() {
  const [openPicker, authResponse] = useDrivePicker();  
  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = () => {
    openPicker({
      clientId: "368322813548-lcotao987uirbrhagme577khkir5vtld.apps.googleusercontent.com",
      developerKey: "AIzaSyD1BymJt4VHtBfWNn0PzbiSablCWbRwKgg",
      viewId: "DOCS",
      token:"ya29.a0AfB_byBbvWumvcCqST8GoIR5JX5GISLeS4OxmEleTsnesqX5bU1X3ApKA3K2h6QxmyRVZ0P1PY-tJlQSESSmijEDgfFJSmdEwV06hlIZf0A1fxdKO4MwPSUaq0O81pGCOhXClIqsk8JewtN-c7g_FKA-66DUjWiDgYKuaCgYKATcSARMSFQHGX2MiSWi22GjGHOuMAbbYEULmQA0171",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button')
        }
        console.log(data)
      },
    })
  }


  
  return (
    <div>
        <button onClick={() => handleOpenPicker()}>Open Picker</button>
    </div>
  );
}

export default DrivePicker;