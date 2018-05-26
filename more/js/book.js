pages = document.getElementsByClassName("page");
for(var i=0; i<pages.length;i++){
    load_page(pages[i],"book/page_1.xml");
    }

function load_page(page_node, page_url){
    var xml_http;
    if(window.XMLHttpRequest){xml_http = new XMLHttpRequest();} else {xml_http = new ActiveXObject("Microsoft.XMLHTTP");}
    xml_http.onreadystatechange = function(){if(xml_http.readyState == 4 && xml_http.status == 200){
        
        var page_xml = xml_http.responseXML.documentElement;
        page_node.appendChild(page_xml);
        
        }};
	xml_http.open("GET", page_url, true);
	xml_http.send();
	}

function index_page(e){
    
    }