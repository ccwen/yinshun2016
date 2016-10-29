const localization=require("ksana2015-parallel").localization;
const s=localization.setString;
const stringtable={
"zh.tw":[
	["search","搜尋"],
	["toc","目錄"],
	["dictionary","詞典"],
	["config","設定"],
	["source","出處"]
	]
}

for (var locale in stringtable) {
	localization.setLocale(locale);
	for (var j=0;j<stringtable[locale].length;j++) {
		const id=stringtable[locale][j][0],str=stringtable[locale][j][1];
		localization.setString(id,str);
	}
}