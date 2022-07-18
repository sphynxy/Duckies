// This compressed script copies a base64 string containing every website, username, and password from firefox's about:logins page, using what I found in the "login list"
for(const a in x=document.body.childNodes[3]._logins,y="",x)y+=":"+x[a].login.hostname+","+x[a].login.username+","+x[a].login.password;copy(btoa(y));
