chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(request.message); // -> 選択範囲ちょうだい が出力される
    let vv_li = []; 
    let like_li = [];
    let comment_li = [];
    let share_li = [];
    let handle_li = [];
    let caption_li = [];
    let v_time_li = [];
    let info = "";
    let dates_li = [];

    console.log("contentが読み込まれました")

    const spanS = document.getElementsByTagName("span");
    let elements = document.getElementsByClassName("icon-pair-inner");
    let handles = document.getElementsByClassName("handle");
    let el_length = handles.length;
    let captions = document.getElementsByClassName("semi-typography semi-typography-paragraph semi-typography-ellipsis semi-typography-ellipsis-single-line semi-typography-primary semi-typography-normal");
    let v_time = document.getElementsByClassName("ant-tag video-controls-duration");

    for (let i = 0; i < el_length*4; i++) {
        switch (i%4) {
        case 0:
            vv_li.push(elements[i].textContent);
            break;
        case 1:
            like_li.push(elements[i].textContent);
            break;
        case 2:
            comment_li.push(elements[i].textContent);
            break;
        case 3:
            share_li.push(elements[i].textContent);
            break;
        default:
        }
    }
    for (let i=0; i < el_length; i++){
        handle_li.push(handles[i].textContent);
        v_time_li.push("00:"+v_time[i].textContent.trim());
    }

    for (let i=0; i < captions.length; i++){
        if (i%2 == 1) {
            caption_li.push(captions[i].textContent);
        }
    }

    for (let i = 0; i < spanS.length; i++) {
        const element = spanS[i].innerText;
        const regex = /[0-9]{4}\/[0-9]{2}\/[0-9]{2}\s[0-9]{2}:[0-9]{2}:[0-9]{2}/;
        if (regex.test(element)) {
            dates_li.push(element);
        }
    }

    for (let i=0; i < el_length; i++){
        if (captions[i] !== undefined) {
            info += handle_li[i]+","+dates_li[i]+","+caption_li[i]+","+vv_li[i]+","+like_li[i]+","+comment_li[i]+","+share_li[i]+","+v_time_li[i]+"\n";
        }
    }

    sendResponse(info);
  });