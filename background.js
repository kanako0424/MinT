console.log("OK");

function reddenPage() {
    let vv_li = []; 
    let like_li = [];
    let comment_li = [];
    let share_li = [];
    let handle_li = [];
    let caption_li = [];
    let info = "";

    console.log("backgroundが読み込まれました")

    let elements = document.getElementsByClassName("icon-pair-inner");
    let handles = document.getElementsByClassName("handle");
    let el_length = handles.length;
    let captions = document.getElementsByClassName("semi-typography semi-typography-paragraph semi-typography-ellipsis semi-typography-ellipsis-single-line semi-typography-primary semi-typography-normal");


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
    }

    for (let i=0; i < captions.length; i++){
        if (i%2 == 1) {
            caption_li.push(captions[i].textContent);
        }
    }

    for (let i=0; i < el_length; i++){
        if (captions[i] !== undefined) {
            info += caption_li[i]+","+vv_li[i]+","+like_li[i]+","+comment_li[i]+","+share_li[i]+","+handle_li[i]+"\n";
        }
    }
    console.log(info);
}

// 拡張機能アイコンがクリックされたら中身を実行する
chrome.action.onClicked.addListener((tab) => {
    // スクリプトを実行する
    chrome.scripting.executeScript({
        // クリックされたタブを対象にする
        target: { tabId: tab.id },
        // 実行するのは reddenPage の中身
        function: reddenPage
    });
});