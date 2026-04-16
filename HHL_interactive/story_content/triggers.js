function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Ule35dtL5K":
        Script1();
        break;
      case "6AurlD69iSM":
        Script2();
        break;
      case "6d9ybXz0Js8":
        Script3();
        break;
      case "6F8ZkHpLkAs":
        Script4();
        break;
      case "6ghTMxOatPs":
        Script5();
        break;
      case "6LK8IpucDeC":
        Script6();
        break;
      case "5bUKKJacW9N":
        Script7();
        break;
      case "6oZyIa2iHfX":
        Script8();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('5qkc2PIoKsh');
const duration = 1000;
const easing = 'ease-out';
const id = '666hzmNwnNF';
player.addForTriggers(
id,
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5xjlO61mmeS');
const duration = 1000;
const easing = 'ease-out';
const id = '66X16ZoR0UT';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5l1d9WL4uq7');
const duration = 1500;
const easing = 'ease-out';
const id = '6Q0JhheBmZV';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5ucQDwOqfCI');
const duration = 750;
const easing = 'ease-out';
const id = '6QGStIvC3Gn';
const shakeAmount = 1;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('69Bx8Cx7xFQ');
const duration = 500;
const easing = 'ease-out';
const id = '69QPn1DjS64';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6NVFzQtCNIv');
const duration = 1000;
const easing = 'ease-out';
const id = '6OCs2Iysr41';
player.addForTriggers(
id,
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5tXy2UTVVq9');
const duration = 1000;
const easing = 'ease-out';
const id = '6lZgSFzrfUU';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('5l1d9WL4uq7');
const duration = 1500;
const easing = 'ease-out';
const id = '6Q0JhheBmZV';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
