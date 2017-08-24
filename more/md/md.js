markdownElementsArray = document.getElementsByClassName("markdown");
for(var i=0;i<markdownElementsArray.length;i++){
	ProcessMarkdown(markdownElementsArray[i]);
	}

// Removes MathJax Ignore, Sets alignment left, Typesets remaining MathJax
// https://stackoverflow.com/questions/30077862/how-to-left-align-certain-equations-in-mathjax/
      window.MathJax = {
        AuthorInit: function() {
          MathJax.Hub.Register.StartupHook("Begin", function() {
            MathJax.Hub.Queue(function() {
              var elements = document.getElementsByClassName('tex2jax_ignore');
              for (var i = 0; i < elements.length; i++) {
                elements[i].classList.remove('tex2jax_ignore');
              }
              MathJax.Hub.Config({
                displayAlign: "left"
              });
              MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
            });
          });
        }
      };


/* This markdown flavor emphasizes compartmentalization. 
 * For efficiency, it avoids use of innerHTML, RegEx, search (as opposed to indexOf), and other poorer practices. 
 * It contains one global array, Function, and series of intertwined functions starting with ProcessMarkdown.  
 * 
 */



function ProcessMarkdown(md_node){
	var Function = [				// To Do once this whole thing is completely done and there are no more little add ons or anything, replace this with direct calls.
		CodeBlock,					// 0
		LaTeXBlock,					// 1
		ListsTablesParagraphs,		// 2
		CodeInline,					// 3
		LaTeXInline,				// 4
		math,						// 5
		md,							// 6
		img,						// 7
		vid,						// 8
		style,						// 9
		br,							// 10
		txt							// 11
		];
	
	var md_is_valid = ( md_node.childNodes.length == 1 && md_node.childNodes[0].nodeType == 3 );
	if(md_is_valid){																					// If there's only a single text node
		var md_str        = md_node.childNodes[0].nodeValue;											// Extract String
		md_node.removeChild(md_node.childNodes[0]);														// Clean   Node
		
		while(md_str.includes("    ")){md_str = md_str.replace("    ","\t");}							// Process as Tabs
		while(md_str.includes("\r")){md_str = md_str.replace("\r","");}									// Process as Returns
		md_str = HideEscapeChars(md_str);
		
		Function[0]( md_node, md_str );															// Initiate Cascade 
		}
	else{
		md_node.innerHTML ="Invalid Markdown";
		}
	
	function HideEscapeChars(md_str){
		
		while(md_str.includes("\\*" )){ md_str = md_str.replace("\\*" , "MDEscapeCharAsterisk");	}
		while(md_str.includes("\\\\")){ md_str = md_str.replace("\\\\", "MDEscapeCharBackSlash");	}
		while(md_str.includes("\\^" )){ md_str = md_str.replace("\\^" , "MDEscapeCharSup");			}
		while(md_str.includes("\\_" )){ md_str = md_str.replace("\\_" , "MDEscapeCharSub");			}
		while(md_str.includes("\\|" )){ md_str = md_str.replace("\\|" , "MDEscapeCharBar");			}
		while(md_str.includes("\\`" )){ md_str = md_str.replace("\\`" , "MDEscapeCharTik");			}
		
		/* LaTeX Makes these Unusable. 
		while(md_str.includes("\\(" )){ md_str = md_str.replace("\\(" , "MDEscapeCharLeftPar");		}
		while(md_str.includes("\\)" )){ md_str = md_str.replace("\\)" , "MDEscapeCharRightPar");	}
		while(md_str.includes("\\[" )){ md_str = md_str.replace("\\[" , "MDEscapeCharLeftBracket");	}
		while(md_str.includes("\\]" )){ md_str = md_str.replace("\\]" , "MDEscapeCharRightBracket");}
		*/
		
		return md_str;
		}
	function UnHideEscapeChars(md_str){
		
		while(md_str.includes("MDEscapeCharAsterisk"    )){ md_str = md_str.replace("MDEscapeCharAsterisk"		, "*"  );	}
		while(md_str.includes("MDEscapeCharBackSlash"   )){ md_str = md_str.replace("MDEscapeCharBackSlash"		, "\\" );	}
		
		while(md_str.includes("MDEscapeCharSup"         )){ md_str = md_str.replace("MDEscapeCharSup"			, "^"  );	}
		while(md_str.includes("MDEscapeCharSub"         )){ md_str = md_str.replace("MDEscapeCharSub"			, "_"  );	}
		while(md_str.includes("MDEscapeCharBar"         )){ md_str = md_str.replace("MDEscapeCharBar"			, "|"  );	}
		while(md_str.includes("MDEscapeCharTik"         )){ md_str = md_str.replace("MDEscapeCharTik"			, "`"  );	}
		
		/* LaTeX Makes these Unusable. 
		while(md_str.includes("MDEscapeCharLeftPar"     )){ md_str = md_str.replace("MDEscapeCharLeftPar"		, "("  );	}
		while(md_str.includes("MDEscapeCharRightPar"    )){ md_str = md_str.replace("MDEscapeCharRightPar"		, ")"  );	}
		while(md_str.includes("MDEscapeCharLeftBracket" )){ md_str = md_str.replace("MDEscapeCharLeftBracket"	, "["  );	}
		while(md_str.includes("MDEscapeCharRightBracket")){ md_str = md_str.replace("MDEscapeCharRightBracket"	, "]"  );	}
		*/
		
		return md_str;
		}
	function UnHideEscapeCharsLaTex(md_str){
		
		while(md_str.includes("MDEscapeCharAsterisk"    )){ md_str = md_str.replace("MDEscapeCharAsterisk"		, "\\*"  );	}
		while(md_str.includes("MDEscapeCharBackSlash"   )){ md_str = md_str.replace("MDEscapeCharBackSlash"		, "\\\\" );	}
		
		while(md_str.includes("MDEscapeCharSup"         )){ md_str = md_str.replace("MDEscapeCharSup"			, "\\^"  );	}
		while(md_str.includes("MDEscapeCharSub"         )){ md_str = md_str.replace("MDEscapeCharSub"			, "\\_"  );	}
		while(md_str.includes("MDEscapeCharBar"         )){ md_str = md_str.replace("MDEscapeCharBar"			, "\\|"  );	}
		while(md_str.includes("MDEscapeCharTik"         )){ md_str = md_str.replace("MDEscapeCharTik"			, "\\`"  );	}
		
		/* LaTeX Makes these Unusable. 
		while(md_str.includes("MDEscapeCharLeftPar"     )){ md_str = md_str.replace("MDEscapeCharLeftPar"		, "("  );	}
		while(md_str.includes("MDEscapeCharRightPar"    )){ md_str = md_str.replace("MDEscapeCharRightPar"		, ")"  );	}
		while(md_str.includes("MDEscapeCharLeftBracket" )){ md_str = md_str.replace("MDEscapeCharLeftBracket"	, "["  );	}
		while(md_str.includes("MDEscapeCharRightBracket")){ md_str = md_str.replace("MDEscapeCharRightBracket"	, "]"  );	}
		*/
		
		return md_str;
		}
	
	
	function CodeBlock(             parent_md_node, md_str ){					// 0
		if(md_str.includes("```")){
			
			var md_str_array = md_str.split("```");	
			
			for(var i=0; i < md_str_array.length; i++){
				
				if(i%2===0){ Function[1]( parent_md_node, md_str_array[i] ); }
				else{
					//Get Code Class
					var space_index = md_str_array[i].indexOf(" ");
					var break_index = md_str_array[i].indexOf("\n");
					var tab_index   = md_str_array[i].indexOf("\t");
					var starts_whitespace = space_index === 0 || break_index === 0 || tab_index  === 0;
					//var has_whitespace  =   space_index !=  -1 || break_index !=  -1 || tab_index  != -1;
					var has_whitespace    = !(space_index === -1 && break_index === -1 && tab_index  === -1);
					
					var code_class = "";
					if(!starts_whitespace && has_whitespace){
						
						// Collect Whitespaces
						var whitespace_array = [];
						if(space_index != -1){whitespace_array.push(space_index);}
						if(break_index != -1){whitespace_array.push(break_index);}
						if(tab_index   != -1){whitespace_array.push( tab_index );}
						
						// Get First Whitespace
						var first_whitespace = whitespace_array[0];
						for(var i=1; i<whitespace_array.length; i++){
							if(whitespace_array[i]<first_whitespace){first_whitespace = whitespace_array[i];}
							}
						
						// Assign Language (e.g. ```javascript ...)
						code_class 		= "language-"+md_str_array[i].substring(0,first_whitespace);
						md_str_array[i]	= md_str_array[i].substring(first_whitespace);
						}
					
					var code_node = document.createElement("code");
						code_node.setAttribute("class",code_class);
						while(md_str_array[i].includes("\t")){  md_str_array[i] = md_str_array[i].replace("\t","    ");    }						// Process as Tabs
						code_node.appendChild(document.createTextNode(UnHideEscapeChars(md_str_array[i])));											// Is this the way escape char should work?
					var pre_node  = document.createElement("pre");
						pre_node.appendChild(code_node);
					
					parent_md_node.appendChild(pre_node);
					}
				}
			}
		else{ Function[1]( parent_md_node, md_str ); }											// Pass
		}
	function LaTeXBlock(            parent_md_node, md_str ){					// 1
		
		// LaTeX Block
		var latex_block_start = md_str.indexOf("\\[");
		var latex_block_break = md_str.indexOf("\n",latex_block_start);
		var latex_block_end   = md_str.indexOf("\\]");
		var latex_block = 
			latex_block_start	!=	-1					&& 			// All Exists? 
			latex_block_break	!=	-1 					&& 			//
			latex_block_end		!=	-1					&&			//
			latex_block_start	<	latex_block_break	&& 			// Right Order?
			latex_block_break	<	latex_block_end		;			//
		
		// LaTeX Inline
		var latex_inline_start = md_str.indexOf("\\(");
		var latex_inline_break = md_str.indexOf("\n",latex_inline_start);
		var latex_inline_end   = md_str.indexOf("\\)");
		var latex_inline = 
			latex_inline_break	!=	-1					&& 			// All Exists? 
			latex_inline_start	!=	-1					&& 			//
			latex_inline_end	!=	-1					&&			//
			latex_inline_start	<	latex_inline_break	&& 			// Right Order?
			latex_inline_break	<	latex_inline_end	; 			//
		
		if(latex_block){
			// Handle Pre-LaTeX String
			var md_str_before = md_str.substring(0,latex_block_start);
			Function[2]( parent_md_node, md_str_before );
			
			// Handle LaTeX String
			var md_str_latex = md_str.substring(latex_block_start,latex_block_end+2);
			md_str_latex = entities(md_str_latex);
			var txtNode = document.createTextNode(UnHideEscapeCharsLaTex(md_str_latex));
			parent_md_node.appendChild(txtNode);
			
			// Handle Post-LaTeX String
			var md_str_after = md_str.substring(latex_block_end+2);
			LaTeXBlock( parent_md_node, md_str_after );
			}
		else if(latex_inline){
			// Handle Pre-LaTeX String
			var md_str_before = md_str.substring(0,latex_inline_start);
			Function[2]( parent_md_node, md_str_before );
			
			// Handle LaTeX String
			var md_str_latex = md_str.substring(latex_inline_start,latex_inline_end+2);
			md_str_latex = entities(md_str_latex);
			var txtNode = document.createTextNode(UnHideEscapeCharsLaTex(md_str_latex));
			parent_md_node.appendChild(txtNode);
			
			// Handle Post-LaTeX String
			var md_str_after = md_str.substring(latex_inline_end+2);
			LaTeXBlock( parent_md_node, md_str_after );
			}
		else{
			Function[2]( parent_md_node, md_str );
			}
		}
	function ListsTablesParagraphs( parent_md_node, md_str ){					// 2
		// Because it's Split Markdown
		if(md_str.charAt(0) === "\t"){md_str = "\n" + md_str;}
		
		// Fix Poor List Formating (User Erros)
		var poor_format_index = md_str.indexOf("\n\n\t\t");
		while(poor_format_index != -1){
			var cutPoint = poor_format_index+4;
			while(md_str.charAt(cutPoint) === "\t"){cutPoint++;}
			var first_half_str = md_str.substring(0,poor_format_index);
			var next_half_str = md_str.substring(cutPoint);
			md_str = first_half_str + "\n\n\t" + next_half_str;
			poor_format_index = md_str.indexOf("\n\n\t\t");
			}
		
		// Split List
		var md_str_array = md_str.split("\n\t");
		
		// md_str_array[0] is never LI
		LTP_Paragraphs(parent_md_node, md_str_array[0] );
		
		// Instantiate Variables 
		var li_level = 0;
		
		var ul_node = document.createElement("ul");
			ul_node.setAttribute("class","UL0");
			parent_md_node.appendChild(ul_node);
		var table_node = document.createElement("table");
		
		
		// Process Markdown 
	
		for( var i=1; i < md_str_array.length; i++ ){						// md_str_array[i>0] some LI
			if(md_str_array[i].trim() === ""){continue;}											// Skip Empties
			var tabCount = 0; while(md_str_array[i].charAt(tabCount) === "\t"){tabCount++;}		// Get tabCount
			
			// Switch to Proper List Level
			// if(current == previous){no change}
			if(tabCount > li_level){							// Upper Level
				// Create New UL
				var LiNode_First = ul_node.childNodes[ul_node.childNodes.length-1];
					LTP_AddCollapsers(LiNode_First);
					ul_node = document.createElement("ul");
					ul_node.setAttribute("class","UL"+tabCount);
					LiNode_First.appendChild(ul_node);
				li_level = tabCount;							// Set LI Level
				}
			else if(tabCount < li_level){					// Lower Level
				var ActualShift = 0;
				for( var j = 0; j<(li_level-tabCount); j++ ){ul_node = ul_node.parentNode; ul_node = ul_node.parentNode; }	// Switch to lower LI UL
				li_level = tabCount;															// Set LI Level
				}
			
			// Add List
			if(md_str_array[i].includes("\n")){				// Separate LI and Txt
				
				// LI Component 
				var liComponent = md_str_array[i].slice(0,md_str_array[i].indexOf("\n"));
				LTP_TableAddItem( i, tabCount, liComponent );
				
				// Txt Component
				var txtComponent = md_str_array[i].slice(md_str_array[i].indexOf("\n"));
				LTP_Paragraphs(parent_md_node, txtComponent );
				
				// Reset li_level
				li_level = 0;
				
				// Append New UL
				if(i != md_str_array.length-1){
					ul_node = document.createElement("ul");
					ul_node.setAttribute("class","UL0");
					parent_md_node.appendChild(ul_node);
					}
				}
			else{ LTP_TableAddItem( i, tabCount, md_str_array[i] ); }
			
			}
		
		function LTP_TableAddItem( i, tabCount, liStr ){
			if( 		 LTP_HasTableFormat_ThisLine( md_str_array, i, tabCount ) ){
				if(      LTP_HasTableFormat_NextLine( md_str_array, i, tabCount ) ){ LTP_AddTR( table_node, liStr ); }
				else if( LTP_HasTableFormat_LastLine( md_str_array, i, tabCount ) ){ LTP_AddTR( table_node, liStr );
																						  LTP_EndTable( ul_node );
																						  }
				else{	LTP_AddLI(liStr); }
				}
			else{		LTP_AddLI(liStr); }
			}
		
		// Truth Value Functions
		function LTP_HasTableFormat_ThisLine( md_str_array, i, tabCount ){
			return (md_str_array[i].charAt(tabCount) === "|") 				// Starts with "|"
				&& (md_str_array[i].split("|").length >= 3);					// Enough columns to be meaningful.
			}
		function LTP_HasTableFormat_NextLine( md_str_array, i, tabCount ){
			return (md_str_array.length > i+1)								// Not Last Line
				&& (md_str_array[i+1].charAt(tabCount)     === "|") 			// Not Too Many Tabs, and Starts with "|"
				&& (md_str_array[i+1].split("|").length >= 3)					// Enough columns to be meaningful.
				&& (md_str_array[i+1].trim().charAt(0) === "|");				// Not too few tabs
			}
		function LTP_HasTableFormat_LastLine( md_str_array, i, tabCount ){
			return (i > 1)													// Not First Line
				&& (md_str_array[i-1].charAt(tabCount)     === "|") 			// Not Too Many Tabs, and Starts with "|"
				&& (md_str_array[i-1].split("|").length >= 3)					// Enough columns to be meaningful.
				&& (md_str_array[i-1].trim().charAt(0) === "|");				// Not too few tabs
			}
		
		// Table Operators 
		function LTP_AddTR( table_node, md_str ){
			// TR
			var trNode = document.createElement("tr");
			table_node.appendChild(trNode);
			
			var MdTrArray = md_str.split("|");					// MdTrArray[0] == ""
			for(var j=1;j<MdTrArray.length-1;j++){				// MdTrArray[mdTable.length-1] == ""
				// TD
				var tdNode    = document.createElement("td");
					trNode.appendChild(tdNode);
					var startColon = MdTrArray[j].charAt(0) === ":";
					var endColon = MdTrArray[j].charAt(MdTrArray[j].length-1) === ":";
					if(startColon && endColon){
						MdTrArray[j] = MdTrArray[j].substring(1,MdTrArray[j].length-1);
						tdNode.style.textAlign = "center";
						}
					else if(startColon){
						MdTrArray[j] = MdTrArray[j].substring(1);
						tdNode.style.textAlign = "right";
						}
					else if(endColon){
						MdTrArray[j] = MdTrArray[j].substring(0,MdTrArray[j].length-1);
						tdNode.style.textAlign = "left";
						}
				Function[3]( tdNode, MdTrArray[j] );					// Pass down cascade
				}
			}
		function LTP_EndTable( ul_node ){
			if(table_node.childNodes.length > 0){					// If Not Empty
				var LINode = document.createElement("li");			// Append Table
					LINode.appendChild(table_node);
					ul_node.appendChild(LINode);
				table_node  = document.createElement("table");		// Reset Table 
				}
			}
		
		
		// List Operators
		function LTP_AddLI(LITxt ){
			var LINode    = document.createElement("li");
			ul_node.appendChild(LINode);
			Function[3]( LINode, LITxt );							// Pass 
			}
		function LTP_AddCollapsers(LINode){
			var pmElement = document.createElement("span");
				pmElement.setAttribute("tab_index",1);
				pmElement.setAttribute("class","pmElement");
				pmElement.addEventListener("keypress", function(event){LTP_PressCollapse(event,this)}, false);
				pmElement.addEventListener("click"   , function(){LTP_ClickCollapse(this)}, false);
			// <span class="mElement">[+]</span>
			var pElement = document.createElement("span");
				var pTxt = document.createTextNode("[+]");
				pElement.appendChild(pTxt);
				pElement.setAttribute("class","pElement");
				pElement.style.display = "none";
				pmElement.appendChild(pElement);
			// <span class="mElement">[-]</span>
			var mElement = document.createElement("span");
				var mTxt = document.createTextNode("[\u2212]");
				mElement.appendChild(mTxt);
				mElement.setAttribute("class","mElement");
				pmElement.appendChild(mElement);
			LINode.insertBefore(pmElement,LINode.childNodes[0]);
			}
		function LTP_ClickCollapse(tis){
			pElement = tis.getElementsByClassName("pElement")[0];
			mElement = tis.getElementsByClassName("mElement")[0];
			
			var firstUL;
			var LIChildren = tis.parentElement.childNodes;
			for(var i = 0; i<LIChildren.length; i++){
				if(LIChildren[i].nodeName === "UL"){
					firstUL = LIChildren[i];
					break;
					}
				}
			
			if(pElement.style.display === "none"){
				pElement.style.display = "inline";
				mElement.style.display = "none";
				firstUL.style.display = "none";
				}
			else{
				mElement.style.display = "inline";
				pElement.style.display = "none";
				firstUL.style.display = "block";
				}
			}
		function LTP_PressCollapse(e,tis){
			var x = e.which || e.keyCode;
			if(x == 13){ClickCollapse(tis);}
			}
		
		// Paragraphs Operators
		function LTP_Paragraphs(parent_md_node, markdownStr ){
			var PTable = document.createElement("table");
			
			// Split and Process Markdown 
			var mdArray = markdownStr.split("\n\n");																// Split into Paragraphs
			for(var i=0; i<mdArray.length; i++){																	// For each Paragraph
				if( LTP_ContainsTable(mdArray[i]) ){															// Check if there's a Table in it.
					var TrArray = mdArray[i].trim().split("\n");															// Split the Table into its Rows
					for(var j=0; j<TrArray.length; j++){																	// For Each Row
						if(LTP_HasTableFormat_ThisLine(TrArray,j,0)){												// There is This Row
							var NextRowExist = (TrArray.length > j+1) && LTP_HasTableFormat_ThisLine(TrArray,j+1,0);
							var LastRowExist = (j>0)                  && LTP_HasTableFormat_ThisLine(TrArray,j-1,0);
							if( NextRowExist ){ 		LTP_AddTR(PTable,TrArray[j]);	}							// If There is Next Row, Add TR
							else if( LastRowExist ){	LTP_AddTR(PTable,TrArray[j]); 								// If There is Last Row, Add TR
														if(PTable.childNodes.length != 0){ 										// End and Reset Table
															parent_md_node.appendChild(PTable);
															PTable  = document.createElement("table");
															}
														}
							}
						else{																							
							// Booleans
							var NotThisLine = (j<TrArray.length       && !LTP_HasTableFormat_ThisLine(TrArray,j,0));
							var ThisLine    = (j<TrArray.length       &&  LTP_HasTableFormat_ThisLine(TrArray,j,0));
							var NotNextLine = ((TrArray.length > j+1) && !LTP_HasTableFormat_ThisLine(TrArray,j+1,0));
							
							var Str = ""; 
							while(NotThisLine || (ThisLine && NotNextLine)){											// If not apart of the Table
									Str = Str + TrArray[j]+"\n";j++;													// Separate until there is Table
									// Booleans
									NotThisLine = (j<TrArray.length       && !LTP_HasTableFormat_ThisLine(TrArray,j,0));
									ThisLine    = (j<TrArray.length       &&  LTP_HasTableFormat_ThisLine(TrArray,j,0));
									NotNextLine = ((TrArray.length > j+1) && !LTP_HasTableFormat_ThisLine(TrArray,j+1,0));
									}
							LTP_AddP(parent_md_node,Str);															// Process Separated
							j--;
							}
						}
					}
				else{ LTP_AddP(parent_md_node,mdArray[i]); }
				}
			}
		function LTP_ContainsTable(md_str){
			if(md_str === ""){return false;}					// Can't Contain a table if it's empty
			var tableArray = md_str.trim().split("\n");		// Split to rows
			for(var j=0; j<tableArray.length-1; j++){		// Check for two continuous rows of table format
				if( LTP_HasTableFormat_ThisLine(tableArray,j,0) && LTP_HasTableFormat_ThisLine(tableArray,j+1,0) ){return true;}
				}
			return false;
			}
		function LTP_AddP(parent_md_node,md_str){
			md_str = md_str.trim();
			if(md_str != ""){
				if(md_str.charAt(0) === ">"){
					md_str = md_str.substring(1);
					var QNode   = document.createElement("blockquote");
					parent_md_node.appendChild(QNode);
					Function[3](QNode,md_str);						// Pass Markdown to next function.
					}
				else{
					var PNode   = document.createElement("p");
					parent_md_node.appendChild(PNode);
					Function[3](PNode,md_str);						// Pass Markdown to next function.
					}
				}
			else{
				var br = document.createElement("br");
				parent_md_node.appendChild(br);
				}
			}
		
		
		}
	function CodeInline(           parent_md_node, md_str ){					// 3
				if(md_str.includes("``")){
					var mdArray = md_str.split("``");	
					for(var i=0;i<mdArray.length;i++){
						if(i%2===0){Function[4](parent_md_node,mdArray[i]);}				// Pass
						else{
							var code_node    = document.createElement("code");
							while(mdArray[i].includes("\\`")){mdArray[i] = mdArray[i].replace("\\`","\u0060");}						//Escape Chars //To Do Process in order \\` doesn't work.
							var codeTxtNode = document.createTextNode(UnHideEscapeChars(mdArray[i]));
							code_node.appendChild(codeTxtNode);
							parent_md_node.appendChild(code_node);
							}
						}
					}
				else{Function[4](parent_md_node,md_str);}									// Pass
				}
	function LaTeXInline(          parent_md_node, md_str ){					// 4
		var latex_inline_start = md_str.indexOf("\\(");
		var latex_inline_end   = md_str.indexOf("\\)");
		var latex_block_start = md_str.indexOf("\\[");
		var latex_block_end   = md_str.indexOf("\\]");
		
		if(latex_inline_start < latex_inline_end && latex_inline_start != -1 && latex_inline_end != -1){
			var preStr = md_str.substring(0,latex_inline_start);
			Function[5](parent_md_node,preStr);
			
			var md_str_latex = md_str.substring(latex_inline_start,latex_inline_end+2);
			md_str_latex = entities(md_str_latex);
			var txtNode = document.createTextNode(UnHideEscapeCharsLaTex(md_str_latex));
			parent_md_node.appendChild(txtNode);
			
			var endStr = md_str.substring(latex_inline_end+2);
			LaTeXInline(parent_md_node,endStr);
			}
		else if(latex_block_start < latex_block_end && latex_block_start != -1 && latex_block_end != -1){
			var md_str_before = md_str.substring(0,latex_block_start);											// Take what's before the LaTeX
			Function[5]( parent_md_node, md_str_before );												// Pass It
			
			var md_str_latex = md_str.substring(latex_block_start,latex_block_end+2);							// Take the LaTeX
			md_str_latex = entities(md_str_latex);
			var txtNode = document.createTextNode(UnHideEscapeCharsLaTex(md_str_latex));
			parent_md_node.appendChild(txtNode);
			
			var md_str_after = md_str.substring(latex_block_end+2);											// Take what's after the LaTeX
			LaTeXInline(parent_md_node,md_str_after );													// Look for more (Recursive)
			}
		else{Function[5](parent_md_node,md_str);}
		}
	function math(				   parent_md_node, md_str ){					// 5
		ReservedWords(parent_md_node, md_str, "Math", mathNode, loadMathToNode, 5);
		function mathNode(){
			var mathNode = document.createElement("span");
			return mathNode;
			}
		}
	function md(				   parent_md_node, md_str ){					// 6
		ReservedWords(parent_md_node, md_str, "Md", MdNode, MdProcess, 6);
		function MdNode(){
			var    mdNode = document.createElement("div");
			return mdNode;
			}
		function MdProcess(mdNode,linkStr){
			var child = document.createElement("div");
			
			var docstr;
			var dochttp;
			if (window.XMLHttpRequest){dochttp = new XMLHttpRequest();} else {dochttp = new ActiveXObject("Microsoft.XMLHTTP");}
			dochttp.onreadystatechange = function(){if (dochttp.readyState == 4 && dochttp.status == 200){
				docstr = dochttp.responseText.toString();
				
				mdNode.appendChild(child);
				child.appendChild(document.createTextNode(docstr));
				ProcessMarkdown(child);
				
				}}
			dochttp.open("GET", linkStr, true);
			dochttp.send(null);
			}
		}
	function img(            	   parent_md_node, md_str ){					// 7
		ReservedWords(parent_md_node, md_str, "Img", imgNode, imgProcess, 7);
		function imgNode(){
			var imgNode = document.createElement("img");
			imgNode.setAttribute("data-imgv",0);
			imgNode.setAttribute("data-imgbig",0);
			return imgNode;
			}
		function imgProcess(imgNode,linkStr){			// Src and Backup Images
			var linkStrArray = linkStr.split(" ");
			var hrefStr = linkStrArray[0];						// Initial Src
			imgNode.setAttribute("src",hrefStr);
			
			// Resize to Real & Original
			imgNode.addEventListener("click",function(event){ ToRealSize(event,this);},false);
			function ToRealSize(e,tis){
				var i = parseInt(tis.getAttribute('data-imgbig'));
				if(i==0){
					tis.setAttribute("data-width" ,tis.style.width);
					tis.setAttribute("data-height",window.getComputedStyle(tis,null).getPropertyValue("height"));
					
					// To Do: Why does this go to true?
					//document.getElementById("test").innerHTML = window.getComputedStyle(tis,null).getPropertyValue("height");
					//document.getElementById("test").innerHTML = window.getComputedStyle(tis,null).getPropertyValue("font-size");
					//document.getElementById("test").innerHTML = window.getComputedStyle(tis,null).getPropertyValue("height") < window.getComputedStyle(tis,null).getPropertyValue("font-size");
					
					
					if(window.getComputedStyle(tis,null).getPropertyValue("float") === "none"){
						tis.style.height = "100%";
						}
					else{
						tis.style.width  = "100%";
						}
					tis.setAttribute("data-imgbig",1);
					}
				else{
					if(window.getComputedStyle(tis,null).getPropertyValue("float") === "none"){
						tis.style.height = tis.getAttribute('data-height');
						}
					else{
						tis.style.width   = tis.getAttribute('data-width');
						}
					tis.setAttribute("data-imgbig",0);
					}
				
				}
			
			// Subsequent Src
			if(linkStrArray.length > 1){																			// If Multiple
				linkStrArray.shift();																					// Remove First
				for(var i=0; i<linkStrArray.length; i++){ if(linkStrArray[i] === ""){linkStrArray.splice(i,1);i--;} }	// Remove Empties
				if(linkStrArray.length > 0){																		// If anything left
					// Add Error Listener
					imgNode.addEventListener("error",function(event){imgFailure(event,this,linkStrArray)},false);
					function imgFailure(e,tis,hrefArray){
						var i = parseInt(tis.getAttribute('data-imgv'));
						// Switch to Next Image.
						if(i>hrefArray.length){tis.onerror = null;}
						else{
							tis.setAttribute('data-imgv',i+1);
							tis.src=hrefArray[i];
							}
						}
					}
				}
			}
		}
	function vid(				   parent_md_node, md_str ){					// 8
		ReservedWords(parent_md_node, md_str, "Vid", vidNode, vidProcess, 8);
		function vidNode(){
			var vidNode = document.createElement("video");
			vidNode.setAttribute("data-vidv",0);
			vidNode.setAttribute("controls","");
			return vidNode;
			}
		function vidProcess(vidNode,linkStr){			// Src and Backup Videos
			var linkStrArray = linkStr.split(" ");
			for(var i=0; i<linkStrArray.length; i++){
				if(!linkStrArray[i].includes(".")){continue;}			// Ignore if no file Type
				var sourceNode = document.createElement("source");		// Source Node
					vidNode.appendChild(sourceNode);
					sourceNode.setAttribute("src",linkStrArray[i]);
					sourceNode.setAttribute("type","video/" + linkStrArray[i].substring(linkStrArray[i].lastIndexOf(".")+1));
				}
			}
		}
	
	function style(				   parent_md_node, md_str ){					// 9
		
		// Step One: Check to see if the string has the Components 
		var leftBracket  = md_str.indexOf("[");
		var midBrackets  = md_str.indexOf("](",leftBracket);
		var rightBracket = md_str.indexOf(")",midBrackets);
		var BoldItalics  = md_str.indexOf("***");	var BoldItalics2 = md_str.indexOf("***",BoldItalics+3);
		var Bold         = md_str.indexOf("**");		var Bold2        = md_str.indexOf("**",Bold+2);
		var Italics      = md_str.indexOf("*");		var Italics2     = md_str.indexOf("*",Italics+1);
		var Strike       = md_str.indexOf("~~");		var Strike2      = md_str.indexOf("~~",Strike+2);
		var Super        = md_str.indexOf("^");
		var Sub          = md_str.indexOf("_");
		var H1       	 = md_str.indexOf("#");
		var H2       	 = md_str.indexOf("##");
		var H3       	 = md_str.indexOf("###");
		var H4       	 = md_str.indexOf("####");
		var H5       	 = md_str.indexOf("#####");
		var H6       	 = md_str.indexOf("######");
		
		// Step Two: Check to see if those components are elements
		var contains_leftBracket  = leftBracket  != -1;
		var contains_midBrackets  = midBrackets  != -1;
		var contains_rightBracket = rightBracket != -1;
		var contains_all = contains_leftBracket && contains_midBrackets && contains_rightBracket;
		var rightOrder   = leftBracket < midBrackets < rightBracket;
		var contains_BoldItalics  = BoldItalics  != -1 && BoldItalics2  != -1 && BoldItalics < BoldItalics2;
		var contains_Bold         = Bold         != -1 && Bold2         != -1 && Bold<Bold2;
		var contains_Italics      = Italics      != -1 && Italics2      != -1 && Italics<Italics2; 
		var contains_Strike       = Strike       != -1 && Strike2       != -1 && Strike<Strike2;
		var contains_Super        = Super        != -1;   
		var contains_Sub          = Sub          != -1;   
		var contains_H1           = H1           === 0;
		var contains_H2           = H2           === 0;
		var contains_H3           = H3           === 0;
		var contains_H4           = H4           === 0;
		var contains_H5           = H5           === 0;
		var contains_H6           = H6           === 0;
		
		
		// Add locations of each element
		var styleArray = [];
		if(contains_all && rightOrder){	styleArray.push(leftBracket);	}
		if(contains_BoldItalics){		styleArray.push(BoldItalics);	}
		else if(contains_Bold){			styleArray.push(Bold);			}
		else if(contains_Italics){		styleArray.push(Italics);		}
		if(contains_Strike){			styleArray.push(Strike);		}
		if(contains_Super){				styleArray.push(Super);			}
		if(contains_Sub){				styleArray.push(Sub);			}
		if(contains_H6){				styleArray.push(H6);			}
		else if(contains_H5){			styleArray.push(H5);			}
		else if(contains_H4){			styleArray.push(H4);			}
		else if(contains_H3){			styleArray.push(H3);			}
		else if(contains_H2){			styleArray.push(H2);			}
		else if(contains_H1){			styleArray.push(H1);			}
		
		
		
		if(styleArray.length > 0){
			
			// Sort the Order of each Element
			var smallest = styleArray[0];
			for(var i=1; i<styleArray.length; i++){
				if(styleArray[i]<smallest){smallest = styleArray[i];}
				}
			
			// Pretty Sure the else statements are unnecessary
			if(smallest === leftBracket && contains_all && rightOrder){Link_fun();}
			else if(smallest === BoldItalics){	BoldItalics_fun();	}
			else if(smallest === Bold){			Bold_fun();			}
			else if(smallest === Italics){		Italics_fun();		}
			else if(smallest === Strike){		Strike_fun();		}
			else if(smallest === Super){		Super_fun();		}
			else if(smallest === Sub){		    Sub_fun();			}
			else if(smallest === H6){			H_fun(6,"h6");		}
			else if(smallest === H5){			H_fun(5,"h5");		}
			else if(smallest === H4){			H_fun(4,"h4");		}
			else if(smallest === H3){			H_fun(3,"h3");		}
			else if(smallest === H2){			H_fun(2,"h2");		}
			else if(smallest === H1){			H_fun(1,"h1");		}
			
			}
		else{Function[10]( parent_md_node, md_str );}
		
		
		function Link_fun(){
			var preStr       = md_str.substring( 0,             leftBracket  );
			var wordStr      = md_str.substring( leftBracket+1, midBrackets  );
			var titleLinkStr = md_str.substring( midBrackets+2, rightBracket );
			var postStr      = md_str.substring( rightBracket+1              );
			
			Function[9]( parent_md_node, preStr );
			
			var titleLinkArray = TitleLinkComponents(titleLinkStr);
			var titleStr   	   = titleLinkArray[0];
			var linkStr   	   = titleLinkArray[1];
			
			if(linkStr === ""){
				var SpanNode    = document.createElement("span");
					parent_md_node.appendChild(SpanNode);
					SpanNode.setAttribute("title",UnHideEscapeChars(titleStr));
					SpanNode.setAttribute("class","HasTitle");
					Function[9]( SpanNode, wordStr );
				}
			else{
				var ANode    = document.createElement("a");
					parent_md_node.appendChild(ANode);
					if(titleStr != ""){
						ANode.setAttribute("title",UnHideEscapeChars(titleStr));
						ANode.setAttribute("class","HasTitle");
						}
					ANode.setAttribute("href",UnHideEscapeChars(linkStr));
					Function[9]( ANode, wordStr );
				}
			Function[9]( parent_md_node, postStr );
			}
		function BoldItalics_fun(){
			var preStr       = md_str.substring( 0,             BoldItalics  );
			var wordStr      = md_str.substring( BoldItalics+3, BoldItalics2 );
			var postStr      = md_str.substring( BoldItalics2+3              );
			
			Function[9]( parent_md_node, preStr );
			
			var iNode    = document.createElement("i");
			var bNode    = document.createElement("b");
			parent_md_node.appendChild(iNode);
			iNode.appendChild(bNode);
			Function[9]( bNode, wordStr );
			
			Function[9]( parent_md_node, postStr );
			}
		function Bold_fun(){
			
			var preStr       = md_str.substring( 0,      Bold  );
			var wordStr      = md_str.substring( Bold+2, Bold2 );
			var postStr      = md_str.substring( Bold2+2       );
			
			Function[9]( parent_md_node, preStr );
			
			var bNode    = document.createElement("b");
			parent_md_node.appendChild(bNode);
			Function[9]( bNode, wordStr );
			
			Function[9]( parent_md_node, postStr );
			}
		function Italics_fun(){
			
			var preStr       = md_str.substring( 0,      Italics  );
			var wordStr      = md_str.substring( Italics+1, Italics2 );
			var postStr      = md_str.substring( Italics2+1       );
			
			Function[9]( parent_md_node, preStr );
			
			var iNode    = document.createElement("i");
			parent_md_node.appendChild(iNode);
			Function[9]( iNode, wordStr );
			
			Function[9]( parent_md_node, postStr );
			}
		function Strike_fun(){
			
			var preStr       = md_str.substring( 0,    Strike  );
			var wordStr      = md_str.substring( Strike, Strike2 );
			var postStr      = md_str.substring( Strike2       );
			
			Function[9]( parent_md_node, preStr );
			
			var sNode    = document.createElement("del");
			parent_md_node.appendChild(sNode);
			Function[9]( sNode, wordStr );
			
			Function[9]( parent_md_node, postStr );
			}
		function Super_fun(){
			
			var preStr       = md_str.substring( 0,             Super  );
			var wordStr      = "";
			var postStr      = "";
			
			
			var whitespace_array = [];
			var space_index = md_str.indexOf(" " ,Super);
			var break_index = md_str.indexOf("\n",Super);
			var tab_index   = md_str.indexOf("\t",Super);
			
			
			if(space_index != -1){whitespace_array.push(space_index);}
			if(break_index != -1){whitespace_array.push(break_index);}
			if(tab_index   != -1){whitespace_array.push(tab_index);  }
			
			if(whitespace_array.length > 0){
				var first_whitespace = whitespace_array[0];
				for(var i=1; i<whitespace_array.length; i++){
					if(whitespace_array[i]<first_whitespace){first_whitespace = whitespace_array[i];}
					}
				wordStr = md_str.substring( Super+1, first_whitespace );
				postStr = md_str.substring( first_whitespace );
				}
			else{
				wordStr = md_str.substring( Super+1 );
				postStr = "";
				}
			
			Function[9]( parent_md_node, preStr );
			
			var SuperNode    = document.createElement("sup");
				parent_md_node.appendChild(SuperNode);
				Function[9]( SuperNode, wordStr );
			
			Function[9]( parent_md_node, postStr );
			}
		function Sub_fun(){
			
			var preStr       = md_str.substring( 0,             Sub  );
			var wordStr      = "";
			var postStr      = "";
			
			
			var whitespace_array = [];
			var space_index = md_str.indexOf(" " ,Sub);
			var break_index = md_str.indexOf("\n",Sub);
			var tab_index   = md_str.indexOf("\t",Sub);
			
			
			if(space_index != -1){whitespace_array.push(space_index);}
			if(break_index != -1){whitespace_array.push(break_index);}
			if(tab_index   != -1){whitespace_array.push(tab_index);  }
			
			if(whitespace_array.length > 0){
				var first_whitespace = whitespace_array[0];
				for(var i=1; i<whitespace_array.length; i++){
					if(whitespace_array[i]<first_whitespace){first_whitespace = whitespace_array[i];}
					}
				wordStr = md_str.substring( Sub+1, first_whitespace );
				postStr = md_str.substring( first_whitespace );
				}
			else{
				wordStr = md_str.substring( Sub+1 );
				postStr = "";
				}
			
			Function[9]( parent_md_node, preStr );
			
			var SubNode    = document.createElement("sub");
				parent_md_node.appendChild(SubNode);
				Function[9]( SubNode, wordStr );
			
			Function[9]( parent_md_node, postStr );
			}
		function H_fun( i,tag ){
			
			var wordStr      = "";
			var postStr      = "";
			
			var break_index = md_str.indexOf("\n");
			
			if(break_index != -1){
				wordStr = md_str.substring( i, break_index );
				postStr = md_str.substring( break_index );
				}
			else{
				wordStr = md_str.substring( i );
				postStr = "";
				}
			
			var H1Node    = document.createElement(tag);
				parent_md_node.appendChild(H1Node);
				Function[9]( H1Node, wordStr );
			
			Function[9]( parent_md_node, postStr );
			}
		}
	function br(				   parent_md_node, md_str ){					//10
		var md_str_array = md_str.split("<br>");	
		for(var i=0; i<md_str_array.length; i++){
			Function[11]( parent_md_node, md_str_array[i] );
			if(i<md_str_array.length-1){
				var br = document.createElement("br");
				parent_md_node.appendChild(br);
				}
			}
		}
	function txt(				   parent_md_node, md_str ){					// 11
			md_str = entities(md_str);
			
			var txtNode = document.createTextNode(UnHideEscapeChars(md_str));
			parent_md_node.appendChild(txtNode);
			}
	
	// Common Resource Functions
	
	function entities(md_str){
		
		// EntitiesArray
		md_str = replaceEntity(md_str, "&empty;", "\u00AD");	md_str = replaceEntity(md_str, "&#0173;", "\u00AD");	md_str = replaceEntity(md_str, "&#xAD:",  "\u00AD");
		md_str = replaceEntity(md_str, "&none;",  "\u00AD");	md_str = replaceEntity(md_str, "&#173;",  "\u00AD");	
		
		// A https://www.w3schools.com/charsets/ref_html_entities_a.asp
		md_str = replaceEntity(md_str, "&aacute;",  "\u00e1");	md_str = replaceEntity(md_str, "&#225;",  "\u00e1");	md_str = replaceEntity(md_str, "&#xE1:",  "\u00e1");
		md_str = replaceEntity(md_str, "&Aacute;",  "\u00c1");	md_str = replaceEntity(md_str, "&#193;",  "\u00c1");	md_str = replaceEntity(md_str, "&#xC1;",  "\u00c1");
		
		md_str = replaceEntity(md_str, "&acirc;",   "\u00e2");	md_str = replaceEntity(md_str, "&#226;",  "\u00e2");	md_str = replaceEntity(md_str, "&#xE2:",  "\u00e2");
		md_str = replaceEntity(md_str, "&Acirc;",   "\u00c2");	md_str = replaceEntity(md_str, "&#194;",  "\u00c2");	md_str = replaceEntity(md_str, "&#xC2;",  "\u00c2");
		md_str = replaceEntity(md_str, "&acute;",   "\u00b4");	md_str = replaceEntity(md_str, "&#180;",  "\u00b4");	md_str = replaceEntity(md_str, "&#xB4;",  "\u00b4");
		
		md_str = replaceEntity(md_str, "&aelig;",   "\u00e6");	md_str = replaceEntity(md_str, "&#230;",  "\u00e6");	md_str = replaceEntity(md_str, "&#xE6:",  "\u00e6");
		md_str = replaceEntity(md_str, "&AElig;",   "\u00c6");	md_str = replaceEntity(md_str, "&#198;",  "\u00c6");	md_str = replaceEntity(md_str, "&#xC6;",  "\u00c6");
		
		md_str = replaceEntity(md_str, "&agrave;",  "\u00e0");	md_str = replaceEntity(md_str, "&#224;",  "\u00e0");	md_str = replaceEntity(md_str, "&#xE0:",  "\u00e0");
		md_str = replaceEntity(md_str, "&Agrave;",  "\u00c0");	md_str = replaceEntity(md_str, "&#192;",  "\u00c0");	md_str = replaceEntity(md_str, "&#xC0;",  "\u00c0");
		
		md_str = replaceEntity(md_str, "&amp;",     "\u0026");	md_str = replaceEntity(md_str, "&#38;",   "\u0026");	md_str = replaceEntity(md_str, "&#x26;",  "\u0026");
		
		md_str = replaceEntity(md_str, "&aring;",   "\u00e5");	md_str = replaceEntity(md_str, "&#229;",  "\u00e5");	md_str = replaceEntity(md_str, "&#xE5:",  "\u00e5");
		md_str = replaceEntity(md_str, "&Aring;",   "\u00c5");	md_str = replaceEntity(md_str, "&#197;",  "\u00c5");	md_str = replaceEntity(md_str, "&#xC5;",  "\u00c5");
		
		md_str = replaceEntity(md_str, "&atilde;",  "\u00e3");	md_str = replaceEntity(md_str, "&#227;",  "\u00e3");	md_str = replaceEntity(md_str, "&#xE3:",  "\u00e3");
		md_str = replaceEntity(md_str, "&Atilde;",  "\u00c3");	md_str = replaceEntity(md_str, "&#195;",  "\u00c3");	md_str = replaceEntity(md_str, "&#xC3;",  "\u00c3");
		
		md_str = replaceEntity(md_str, "&auml;",    "\u00e4");	md_str = replaceEntity(md_str, "&#228;",  "\u00e4");	md_str = replaceEntity(md_str, "&#xE4:",  "\u00e4");
		md_str = replaceEntity(md_str, "&Auml;",    "\u00c4");	md_str = replaceEntity(md_str, "&#196;",  "\u00c4");	md_str = replaceEntity(md_str, "&#xC4;",  "\u00c4");
		
		// B
		md_str = replaceEntity(md_str, "&brvbar;",  "\u00a6");	md_str = replaceEntity(md_str, "&#166;",  "\u00a6");	md_str = replaceEntity(md_str, "&#xA6;",  "\u00a6");
		
		// C
		md_str = replaceEntity(md_str, "&cent;",    "\u00a2");	md_str = replaceEntity(md_str, "&#162;",  "\u00a2");	md_str = replaceEntity(md_str, "&#xA2;",  "\u00a2");
		md_str = replaceEntity(md_str, "&copy;",    "\u00a9");	md_str = replaceEntity(md_str, "&#169;",  "\u00a9");	md_str = replaceEntity(md_str, "&#xA9;",  "\u00a9");
		md_str = replaceEntity(md_str, "&curren;",  "\u00a4");	md_str = replaceEntity(md_str, "&#164;",  "\u00a4");	md_str = replaceEntity(md_str, "&#xA4;",  "\u00a4");
		md_str = replaceEntity(md_str, "&ccedil;",  "\u00e7");	md_str = replaceEntity(md_str, "&#231;",  "\u00e7");	md_str = replaceEntity(md_str, "&#xE7:",  "\u00e7");
		md_str = replaceEntity(md_str, "&Ccedil;",  "\u00c7");	md_str = replaceEntity(md_str, "&#199;",  "\u00c7");	md_str = replaceEntity(md_str, "&#xC7;",  "\u00c7");
		md_str = replaceEntity(md_str, "&cedil;",   "\u00b8");	md_str = replaceEntity(md_str, "&#184;",  "\u00b8");	md_str = replaceEntity(md_str, "&#xB8;",  "\u00b8");
		
		// D
		md_str = replaceEntity(md_str, "&dagger;",  "\u2020");	md_str = replaceEntity(md_str, "&#8224;", "\u2020");	md_str = replaceEntity(md_str, "&#x2020;","\u2020");
		md_str = replaceEntity(md_str, "&Dagger;",  "\u2021");	md_str = replaceEntity(md_str, "&#8225;", "\u2021");	md_str = replaceEntity(md_str, "&#xB0;",  "\u2021");
		md_str = replaceEntity(md_str, "&deg;",     "\u00b0");	md_str = replaceEntity(md_str, "&#176;",  "\u00b0");	md_str = replaceEntity(md_str, "&#xB0;",  "\u00b0");
		md_str = replaceEntity(md_str, "&divide;",  "\u00f7");	md_str = replaceEntity(md_str, "&#247;",  "\u00f7");	md_str = replaceEntity(md_str, "&#xF7:",  "\u00f7");
		
		// E
		md_str = replaceEntity(md_str, "&Egrave;",  "\u00c8");	md_str = replaceEntity(md_str, "&#200;",  "\u00c8");	md_str = replaceEntity(md_str, "&#xC8:",  "\u00c8");
		md_str = replaceEntity(md_str, "&Eacute;",  "\u00c9");	md_str = replaceEntity(md_str, "&#201;",  "\u00c9");	md_str = replaceEntity(md_str, "&#xC9:",  "\u00c9");
		md_str = replaceEntity(md_str, "&Ecirc;",   "\u00ca");	md_str = replaceEntity(md_str, "&#202;",  "\u00ca");	md_str = replaceEntity(md_str, "&#xCA:",  "\u00ca");
		md_str = replaceEntity(md_str, "&Euml;",    "\u00cb");	md_str = replaceEntity(md_str, "&#203;",  "\u00cb");	md_str = replaceEntity(md_str, "&#xCB:",  "\u00cb");
		md_str = replaceEntity(md_str, "&ETH;",     "\u00d0");	md_str = replaceEntity(md_str, "&#208;",  "\u00d0");	md_str = replaceEntity(md_str, "&#xD0:",  "\u00d0");
		md_str = replaceEntity(md_str, "&eth;",     "\u00f0");	md_str = replaceEntity(md_str, "&#240;",  "\u00f0");	md_str = replaceEntity(md_str, "&#xF0:",  "\u00f0");
		md_str = replaceEntity(md_str, "&egrave;",  "\u00e8");	md_str = replaceEntity(md_str, "&#232;",  "\u00e8");	md_str = replaceEntity(md_str, "&#xE8:",  "\u00e8");
		md_str = replaceEntity(md_str, "&eacute;",  "\u00e9");	md_str = replaceEntity(md_str, "&#233;",  "\u00e9");	md_str = replaceEntity(md_str, "&#xE9:",  "\u00e9");
		md_str = replaceEntity(md_str, "&ecirc;",   "\u00ea");	md_str = replaceEntity(md_str, "&#234;",  "\u00ea");	md_str = replaceEntity(md_str, "&#xEA:",  "\u00ea");
		md_str = replaceEntity(md_str, "&euml;",    "\u00eb");	md_str = replaceEntity(md_str, "&#235;",  "\u00eb");	md_str = replaceEntity(md_str, "&#xEB:",  "\u00eb");
		
		// F
		md_str = replaceEntity(md_str, "&frac14;",  "\u00bc");	md_str = replaceEntity(md_str, "&#188;",  "\u00bc");	md_str = replaceEntity(md_str, "&#xBC;",  "\u00bc");
		md_str = replaceEntity(md_str, "&frac12;",  "\u00bd");	md_str = replaceEntity(md_str, "&#189;",  "\u00bd");	md_str = replaceEntity(md_str, "&#xBD;",  "\u00bd");
		md_str = replaceEntity(md_str, "&frac34;",  "\u00be");	md_str = replaceEntity(md_str, "&#190;",  "\u00be");	md_str = replaceEntity(md_str, "&#xBE;",  "\u00be");
		
		// G
		md_str = replaceEntity(md_str, "&gt;",      "\u003e");	md_str = replaceEntity(md_str, "&#62;",   "\u003e");	md_str = replaceEntity(md_str, "&#x3E;",  "\u003e");
		md_str = replaceEntity(md_str, "&grave;",   "\u0060");	md_str = replaceEntity(md_str, "&#96;",   "\u0060");	md_str = replaceEntity(md_str, "&#x60;",  "\u0060");
		
		// H
		// I
		md_str = replaceEntity(md_str, "&iexcl;",   "\u00a1");	md_str = replaceEntity(md_str, "&#161;",  "\u00a1");	md_str = replaceEntity(md_str, "&#xA1;",  "\u00a1");
		md_str = replaceEntity(md_str, "&Igrave;",  "\u00cc");	md_str = replaceEntity(md_str, "&#204;",  "\u00cc");	md_str = replaceEntity(md_str, "&#xCC:",  "\u00cc");
		md_str = replaceEntity(md_str, "&Iacute;",  "\u00cd");	md_str = replaceEntity(md_str, "&#205;",  "\u00cd");	md_str = replaceEntity(md_str, "&#xCD:",  "\u00cd");
		md_str = replaceEntity(md_str, "&Icirc;",   "\u00ce");	md_str = replaceEntity(md_str, "&#206;",  "\u00ce");	md_str = replaceEntity(md_str, "&#xCE:",  "\u00ce");
		md_str = replaceEntity(md_str, "&Iuml;",    "\u00cf");	md_str = replaceEntity(md_str, "&#207;",  "\u00cf");	md_str = replaceEntity(md_str, "&#xCF:",  "\u00cf");
		md_str = replaceEntity(md_str, "&igrave;",  "\u00ec");	md_str = replaceEntity(md_str, "&#236;",  "\u00ec");	md_str = replaceEntity(md_str, "&#xEC:",  "\u00ec");
		md_str = replaceEntity(md_str, "&iacute;",  "\u00ed");	md_str = replaceEntity(md_str, "&#237;",  "\u00ed");	md_str = replaceEntity(md_str, "&#xED:",  "\u00ed");
		md_str = replaceEntity(md_str, "&icirc;",   "\u00ee");	md_str = replaceEntity(md_str, "&#238;",  "\u00ee");	md_str = replaceEntity(md_str, "&#xEE:",  "\u00ee");
		md_str = replaceEntity(md_str, "&iuml;",    "\u00ef");	md_str = replaceEntity(md_str, "&#239;",  "\u00ef");	md_str = replaceEntity(md_str, "&#xEF:",  "\u00ef");
		md_str = replaceEntity(md_str, "&iquest;",  "\u00bf");	md_str = replaceEntity(md_str, "&#191;",  "\u00bf");	md_str = replaceEntity(md_str, "&#xBF;",  "\u00bf");
		
		// J
		// K
		// L
		md_str = replaceEntity(md_str, "&laquo;",   "\u00ab");	md_str = replaceEntity(md_str, "&#171;",  "\u00ab");	md_str = replaceEntity(md_str, "&#xAB;",  "\u00ab");
		md_str = replaceEntity(md_str, "&lt;",      "\u003c");	md_str = replaceEntity(md_str, "&#60;",   "\u003c");	md_str = replaceEntity(md_str, "&#x3C;",  "\u003c");
		
		// M
		md_str = replaceEntity(md_str, "&macr;",    "\u00af");	md_str = replaceEntity(md_str, "&#175;",  "\u00af");	md_str = replaceEntity(md_str, "&#xAF;",  "\u00af");
		md_str = replaceEntity(md_str, "&micro;",   "\u00b5");	md_str = replaceEntity(md_str, "&#181;",  "\u00b5");	md_str = replaceEntity(md_str, "&#xB5;",  "\u00b5");
		md_str = replaceEntity(md_str, "&middot;",  "\u00b7");	md_str = replaceEntity(md_str, "&#183;",  "\u00b7");	md_str = replaceEntity(md_str, "&#xB7;",  "\u00b7");
		md_str = replaceEntity(md_str, "&mdash;",   "\u2014");	md_str = replaceEntity(md_str, "&#8212;", "\u2014");	md_str = replaceEntity(md_str, "&#x2014;","\u2014");
		
		// N
		md_str = replaceEntity(md_str, "&nbsp;",    "\u00a0");	md_str = replaceEntity(md_str, "&#160;",  "\u00a0");	md_str = replaceEntity(md_str, "&#xA0;",  "\u00a0");
		md_str = replaceEntity(md_str, "&not;",     "\u00ac");	md_str = replaceEntity(md_str, "&#172;",  "\u00ac");	md_str = replaceEntity(md_str, "&#xAC;",  "\u00ac");
		md_str = replaceEntity(md_str, "&Ntilde;",  "\u00d1");	md_str = replaceEntity(md_str, "&#209;",  "\u00d1");	md_str = replaceEntity(md_str, "&#xD1:",  "\u00d1");
		md_str = replaceEntity(md_str, "&ntilde;",  "\u00f1");	md_str = replaceEntity(md_str, "&#241;",  "\u00f1");	md_str = replaceEntity(md_str, "&#xF1:",  "\u00f1");
		md_str = replaceEntity(md_str, "&ndash;",   "\u2013");	md_str = replaceEntity(md_str, "&#8211;", "\u2013");	md_str = replaceEntity(md_str, "&#x2013:","\u2013");
		
		// O
		md_str = replaceEntity(md_str, "&Oacute;",  "\u00d3");	md_str = replaceEntity(md_str, "&#211;",  "\u00d3");	md_str = replaceEntity(md_str, "&#xD3:",  "\u00d3");
		md_str = replaceEntity(md_str, "&oacute;",  "\u00f3");	md_str = replaceEntity(md_str, "&#243;",  "\u00f3");	md_str = replaceEntity(md_str, "&#xF3:",  "\u00f3");
		
		md_str = replaceEntity(md_str, "&Ocirc;",   "\u00d4");	md_str = replaceEntity(md_str, "&#212;",  "\u00d4");	md_str = replaceEntity(md_str, "&#xD4:",  "\u00d4");
		md_str = replaceEntity(md_str, "&ocirc;",   "\u00f4");	md_str = replaceEntity(md_str, "&#244;",  "\u00f4");	md_str = replaceEntity(md_str, "&#xF4:",  "\u00f4");
		
		md_str = replaceEntity(md_str, "&Ograve;",  "\u00d2");	md_str = replaceEntity(md_str, "&#210;",  "\u00d2");	md_str = replaceEntity(md_str, "&#xD2:",  "\u00d2");
		md_str = replaceEntity(md_str, "&ograve;",  "\u00f2");	md_str = replaceEntity(md_str, "&#242;",  "\u00f2");	md_str = replaceEntity(md_str, "&#xF2:",  "\u00f2");
		
		md_str = replaceEntity(md_str, "&ordf;",    "\u00aa");	md_str = replaceEntity(md_str, "&#170;",  "\u00aa");	md_str = replaceEntity(md_str, "&#xAA;",  "\u00aa");
		md_str = replaceEntity(md_str, "&ordm;",    "\u00ba");	md_str = replaceEntity(md_str, "&#186;",  "\u00ba");	md_str = replaceEntity(md_str, "&#xBA;",  "\u00ba");
		
		md_str = replaceEntity(md_str, "&oslash;",  "\u00f8");	md_str = replaceEntity(md_str, "&#248;",  "\u00f8");	md_str = replaceEntity(md_str, "&#xF8:",  "\u00f8");
		md_str = replaceEntity(md_str, "&Oslash;",  "\u00d8");	md_str = replaceEntity(md_str, "&#216;",  "\u00d8");	md_str = replaceEntity(md_str, "&#xD8:",  "\u00d8");
		
		md_str = replaceEntity(md_str, "&otilde;",  "\u00f5");	md_str = replaceEntity(md_str, "&#245;",  "\u00f5");	md_str = replaceEntity(md_str, "&#xF5:",  "\u00f5");
		md_str = replaceEntity(md_str, "&Otilde;",  "\u00d5");	md_str = replaceEntity(md_str, "&#213;",  "\u00d5");	md_str = replaceEntity(md_str, "&#xD5:",  "\u00d5");
		
		md_str = replaceEntity(md_str, "&ouml;",    "\u00f6");	md_str = replaceEntity(md_str, "&#246;",  "\u00f6");	md_str = replaceEntity(md_str, "&#xF6:",  "\u00f6");
		md_str = replaceEntity(md_str, "&Ouml;",    "\u00d6");	md_str = replaceEntity(md_str, "&#214;",  "\u00d6");	md_str = replaceEntity(md_str, "&#xD6:",  "\u00d6");
		
		// P
		md_str = replaceEntity(md_str, "&para;",    "\u00b6");	md_str = replaceEntity(md_str, "&#182;",  "\u00b6");	md_str = replaceEntity(md_str, "&#xB6;",  "\u00b6");
		md_str = replaceEntity(md_str, "&plusmn;",  "\u00b1");	md_str = replaceEntity(md_str, "&#177;",  "\u00b1");	md_str = replaceEntity(md_str, "&#xB1;",  "\u00b1");
		md_str = replaceEntity(md_str, "&pound;",   "\u00a3");	md_str = replaceEntity(md_str, "&#163;",  "\u00a3");	md_str = replaceEntity(md_str, "&#xA3;",  "\u00a3");
		
		// Q
		// R
		md_str = replaceEntity(md_str, "&reg;",     "\u00ae");	md_str = replaceEntity(md_str, "&#174;",  "\u00ae");	md_str = replaceEntity(md_str, "&#xAE;",  "\u00ae");
		md_str = replaceEntity(md_str, "&raquo;",   "\u00bb");	md_str = replaceEntity(md_str, "&#187;",  "\u00bb");	md_str = replaceEntity(md_str, "&#xBB;",  "\u00bb");
		
		// S
		md_str = replaceEntity(md_str, "&sect;",    "\u00a7");	md_str = replaceEntity(md_str, "&#167;",  "\u00a7");	md_str = replaceEntity(md_str, "&#xA7;",  "\u00a7");
		md_str = replaceEntity(md_str, "&shy;",     "\u00ad");	md_str = replaceEntity(md_str, "&#173;",  "\u00ad");	md_str = replaceEntity(md_str, "&#xAD;",  "\u00ad");
		md_str = replaceEntity(md_str, "&sup1;",    "\u00b9");	md_str = replaceEntity(md_str, "&#185;",  "\u00b9");	md_str = replaceEntity(md_str, "&#xB9;",  "\u00b9");
		md_str = replaceEntity(md_str, "&sup2;",    "\u00b2");	md_str = replaceEntity(md_str, "&#178;",  "\u00b2");	md_str = replaceEntity(md_str, "&#xB2;",  "\u00b2");
		md_str = replaceEntity(md_str, "&sup3;",    "\u00b3");	md_str = replaceEntity(md_str, "&#179;",  "\u00b3");	md_str = replaceEntity(md_str, "&#xB3;",  "\u00b3");
		md_str = replaceEntity(md_str, "&szlig;",   "\u00df");	md_str = replaceEntity(md_str, "&#223;",  "\u00df");	md_str = replaceEntity(md_str, "&#xDF:",  "\u00df");
		
		// T
		md_str = replaceEntity(md_str, "&times;",   "\u00d7");	md_str = replaceEntity(md_str, "&#215;",  "\u00d7");	md_str = replaceEntity(md_str, "&#xD7:",  "\u00d7");
		md_str = replaceEntity(md_str, "&THORN;",   "\u00de");	md_str = replaceEntity(md_str, "&#222;",  "\u00de");	md_str = replaceEntity(md_str, "&#xDE:",  "\u00de");
		md_str = replaceEntity(md_str, "&thorn;",   "\u00fe");	md_str = replaceEntity(md_str, "&#254;",  "\u00fe");	md_str = replaceEntity(md_str, "&#xFE:",  "\u00fe");
		
		// U
		md_str = replaceEntity(md_str, "&uml;",     "\u00a8");	md_str = replaceEntity(md_str, "&#168;",  "\u00a8");	md_str = replaceEntity(md_str, "&#xA8;",  "\u00a8");
		md_str = replaceEntity(md_str, "&uacute;",  "\u00fa");	md_str = replaceEntity(md_str, "&#250;",  "\u00fa");	md_str = replaceEntity(md_str, "&#xFA:",  "\u00fa");
		md_str = replaceEntity(md_str, "&Uacute;",  "\u00da");	md_str = replaceEntity(md_str, "&#218;",  "\u00da");	md_str = replaceEntity(md_str, "&#xDA:",  "\u00da");
		md_str = replaceEntity(md_str, "&ucirc;",   "\u00fb");	md_str = replaceEntity(md_str, "&#251;",  "\u00fb");	md_str = replaceEntity(md_str, "&#xFB:",  "\u00fb");
		md_str = replaceEntity(md_str, "&Ucirc;",   "\u00db");	md_str = replaceEntity(md_str, "&#219;",  "\u00db");	md_str = replaceEntity(md_str, "&#xDB:",  "\u00db");
		md_str = replaceEntity(md_str, "&ugrave;",  "\u00f9");	md_str = replaceEntity(md_str, "&#249;",  "\u00f9");	md_str = replaceEntity(md_str, "&#xF9:",  "\u00f9");
		md_str = replaceEntity(md_str, "&Ugrave;",  "\u00d9");	md_str = replaceEntity(md_str, "&#217;",  "\u00d9");	md_str = replaceEntity(md_str, "&#xD9:",  "\u00d9");
		md_str = replaceEntity(md_str, "&uuml;",    "\u00fc");	md_str = replaceEntity(md_str, "&#252;",  "\u00fc");	md_str = replaceEntity(md_str, "&#xFC:",  "\u00fc");
		md_str = replaceEntity(md_str, "&Uuml;",    "\u00dc");	md_str = replaceEntity(md_str, "&#220;",  "\u00dc");	md_str = replaceEntity(md_str, "&#xDC:",  "\u00dc");
		
		// V
		
		// W
		
		// X
		
		// Y
		md_str = replaceEntity(md_str, "&yacute;",  "\u00fd");	md_str = replaceEntity(md_str, "&#253;",  "\u00fd");	md_str = replaceEntity(md_str, "&#xFD:",  "\u00fd");
		md_str = replaceEntity(md_str, "&Yacute;",  "\u00dd");	md_str = replaceEntity(md_str, "&#221;",  "\u00dd");	md_str = replaceEntity(md_str, "&#xDD:",  "\u00dd");
		md_str = replaceEntity(md_str, "&yen;",     "\u00a5");	md_str = replaceEntity(md_str, "&#165;",  "\u00a5");	md_str = replaceEntity(md_str, "&#xA5;",  "\u00a5");
		md_str = replaceEntity(md_str, "&yuml;",    "\u00ff");	md_str = replaceEntity(md_str, "&#255;",  "\u00ff");	md_str = replaceEntity(md_str, "&#xFF:",  "\u00ff");
		
		// Z
		
		return md_str;
		
		function replaceEntity(md_str,entity,unicode){
			var entityLoc = md_str.indexOf(entity);
			while(entityLoc != -1){
				var cutPoint = entityLoc+entity.length;
				var first_half_str = md_str.substring(0,entityLoc);
				var next_half_str = md_str.substring(cutPoint);
				md_str = first_half_str + unicode + next_half_str;
				entityLoc = md_str.indexOf(entity);
				}
			return md_str;
			}
		}
	
	function HTMLs(parent_md_node, md_str, wordStr, i){

			 if(md_str.includes("<"+wordStr              )){HTML(wordStr              );}
		else if(md_str.includes("<"+wordStr.toLowerCase())){HTML(wordStr.toLowerCase());}
		else if(md_str.includes("<"+wordStr.toUpperCase())){HTML(wordStr.toUpperCase());}
		else{Function[i+1](parent_md_node,md_str);}
		
		function HTML(theWordStr){
			var indexStart = md_str.indexOf("<"+theWordStr);
			var indexNextLine = md_str.indexOf("\n",indexStart);
			var indexEnd = md_str.indexOf(">",indexStart);
			if( indexStart < indexEnd && indexStart != -1 && indexEnd != -1 && (indexEnd < indexNextLine || indexNextLine == -1 ) ){
				// Process Pre String Markdown
				var preStr;
				if( md_str.includes("<"+theWordStr) ){ preStr  = md_str.substring(0, md_str.indexOf("<"+theWordStr)); }
				Function[i](parent_md_node,preStr);									// Check for Alt Capitalization, then pass to next
				
				// Process String
				var HTMLStr  = md_str.substring(indexStart,indexEnd);
				parser = new DOMParser();
				doc = parser.parseFromString(HTMLStr, "text/xml");
				var thisNode = doc.firstChild;
				parent_md_node.appendChild(thisNode);
				
				// Process Post String Markdown
				var postStr = md_str.substring(md_str.indexOf(">",n+1)+1);
				Function[i](parent_md_node,postStr);															// Recursive to catch multiple videos
				}
			else{
				Function[i+1](parent_md_node,md_str);
				}
			}
		
		}
	function ReservedWords(parent_md_node, md_str, wordStr, nodeFunction, processFunction, i){
		
		     if(md_str.includes("["+wordStr              )){ ReservedWord(wordStr              );}
		else if(md_str.includes("["+wordStr.toLowerCase())){ ReservedWord(wordStr.toLowerCase());}
		else if(md_str.includes("["+wordStr.toUpperCase())){ ReservedWord(wordStr.toUpperCase());}
		else{Function[i+1](parent_md_node,md_str);}
		
		function ReservedWord(theWordStr){
			
			// Get Class
			classNArray   = classNComponent(theWordStr,md_str)								// Gets Class     [img6] class="6" 
			var wordClass = classNArray[0];															// ClassName=6    [img6]
			var n         = parseInt(classNArray[1]);												// EndingIndex=5  012345
			
			var CompleteKeyWord  = (md_str.charAt(n)   === "]");										// At End of Keyword
			var HasLinkComponent = (md_str.charAt(n+1) === "(") && md_str.includes(")",n+1);			// Has Link Component
			if( CompleteKeyWord && HasLinkComponent){
				
				// Process Pre String Markdown
				var preStr;
				if( md_str.includes("["+theWordStr) ){ preStr  = md_str.substring(0, md_str.indexOf("["+theWordStr)); }
				Function[i](parent_md_node,preStr);									// Check for Alt Capitalization, then pass to next
				
				// Process this 
				var plusNode = document.createElement("div");
				if(wordClass === ""){
					plusNode.setAttribute("class","plusNode");
					plusNode.setAttribute("data-isbig","0");
					parent_md_node.appendChild(plusNode);
					}
				var thisNode = nodeFunction();
				parent_md_node.appendChild(thisNode);
				// Assign Node's Class
				if(wordClass === ""){
					thisNode.style.display = "none";
					plusNode.addEventListener("click", 		function(){ sizeClick(    this,thisNode)}, false);
					function sizeClick(tis,that){
						isBig = (parseInt(tis.getAttribute("data-isbig"))==1);
						if(isBig){
							tis.setAttribute("data-isbig","0");
							that.style.display = "none";
							}
						else{
							tis.setAttribute("data-isbig","1");
							that.style.display = "block";
							}
						}
					}
				else{wordClass=" "+wordClass;}
				wordClass = ""+theWordStr.toLowerCase() + wordClass;
				if(      md_str.includes("["+theWordStr.toLowerCase()) 	){ wordClass = wordClass+" lower";	}
				else if( md_str.includes("["+theWordStr.toUpperCase())	){ wordClass = wordClass+" upper";	}
				thisNode.setAttribute("class", wordClass);
				
				// Separate link and title
				var titleLinkStr   = md_str.substring(n+2,md_str.indexOf(")",n+1));
				var titleLinkArray = TitleLinkComponents(titleLinkStr);
				var titleStr   	   = titleLinkArray[0];
				var linkStr   	   = titleLinkArray[1];
				// Append Title
				thisNode.setAttribute("title",titleStr);
				
				processFunction(thisNode,linkStr);
				
				// Process Post String Markdown
				var postStr = md_str.substring(md_str.indexOf(")",n+1)+1);
				Function[i](parent_md_node,postStr);															// Recursive to catch multiple videos
				}
			else{Function[i+1](parent_md_node,md_str);}															// Pass Markdown to next function.
			
			}
		}
	function TitleLinkComponents(str){
		var title; var linkStr;
		var i = str.indexOf("\"");
		var j = str.indexOf("\"",i+1);
		
		if( i != j && i != -1 && j != -1 ){													// [img](link "title")
			linkStr = ( str.substring(0,i).trim() + " " + str.substring( j+1 ).trim() ).trim();
			title = str.substring(i+1,j);	
			}
		else if( i != j ){																	// [img](link "title)
			linkStr = str.substring(0,i).trim();
			title = str.substring(i+1);
			}
		else{																				// [img](link)
			linkStr = str.trim();
			title = "";			
			}			
		return [title, linkStr];
		}
	function classNComponent(ID_Str, md_str){
		var classStr="";
		var n = md_str.indexOf("["+ID_Str)+1+ID_Str.length;
		var digitsArray = ["0","1","2","3","4","5","6","7","8","9"];
		while(md_str.charAt(n) != "]" && (digitsArray.includes(md_str.charAt(n)))){
			classStr = classStr + md_str.charAt(n);
			n++;
			}
		return [classStr, n];
		}
	
	}