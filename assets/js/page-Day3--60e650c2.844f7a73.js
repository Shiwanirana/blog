(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{479:function(a,n,e){"use strict";e.r(n);var s=e(2),o=Object(s.a)({},(function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"day-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#day-3"}},[a._v("#")]),a._v(" Day 3")]),a._v(" "),e("p",[e("em",[a._v("02/17/2021")])]),a._v(" "),e("h2",{attrs:{id:"what-i-learned-in-coding-school-is"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-i-learned-in-coding-school-is"}},[a._v("#")]),a._v(" What i learned in coding school is...")]),a._v(" "),e("p",[a._v("how to code")]),a._v(" "),e("h2",{attrs:{id:"_1-what-is-an-enum-and-what-are-some-use-cases-for-them"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-what-is-an-enum-and-what-are-some-use-cases-for-them"}},[a._v("#")]),a._v(" 1. What is an Enum, and what are some use cases for them?")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("  Enum is a special class with a group of constants that are not changeable, only can be read.\n  For Example:\n  enum Months\n  {\n    January,       //0\n    February,      //1\n    March,         //2\n    April          //3\n  }\n")])])]),e("h2",{attrs:{id:"_2-how-can-you-modify-an-enum"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-how-can-you-modify-an-enum"}},[a._v("#")]),a._v(" 2. How can you modify an Enum?")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("  Enum can be modified by simply giving a value to the constant.\n  For Example:\n  enum Months\n  {\n    January,       //0\n    February= 4,  //4\n    March,        //5\n    April         //6\n  }\n")])])]),e("h2",{attrs:{id:"_3-how-have-you-used-enums-in-your-afternoon-lab-projects-this-far-if-you-have-not-yet-give-an-example-of-how-you-could"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-how-have-you-used-enums-in-your-afternoon-lab-projects-this-far-if-you-have-not-yet-give-an-example-of-how-you-could"}},[a._v("#")]),a._v(" 3. How have you used Enums in your afternoon lab projects this far?(if you have not yet, give an example of how you could)")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('  We can use enum in rock paper scissors game.\n\n  public enum Options\n  {\n    Rock,\n    Paper,\n    Scissors\n  }\n  \n  public Winner(Options player, Options computer)\n  {\n    if(player == computer)\n    {\n      return "Draw";\n    }\n    else if(player == Options.Rock && computer == Options.Scissors || player == Options.Paper && computer == Options.Rock || player == Scissors && computer == Options.paper)\n    {\n      return "Player wins";\n    }\n    else \n    return "Computer Wins";\n  }\n  We are also using IEnumerable in our projects and is used to iterate among our classes using the for loop.\n\n  Afternoon Project: GregsList Api in C# (https://shiwanirana.github.io/cgregsapi/.)')])])])])}),[],!1,null,null,null);n.default=o.exports}}]);