(function(root){
function createEngine(data){
 const dictionary=new Set(data.words), all=[...dictionary,'TYEE'];
 const differs=(a,b)=>a.length===4&&b.length===4&&[...a].filter((c,i)=>c!==b[i]).length===1;
 // BFS from the destination records a shortest next step for every reachable word.
 const next=new Map([['TYEE',null]]),distance=new Map([['TYEE',0]]),queue=['TYEE'];
 for(let i=0;i<queue.length;i++)for(const word of all)if(!next.has(word)&&differs(queue[i],word)){next.set(word,queue[i]);distance.set(word,distance.get(queue[i])+1);queue.push(word);}
 const puzzles=data.starts.filter(w=>dictionary.has(w)&&distance.get(w)>=2);
 const dailyPool=data.dailyStarts || puzzles.filter(w=>distance.get(w)>=4&&distance.get(w)<=5);
 function validate(path,input){const word=input.trim().toUpperCase();if(path.at(-1)==='TYEE')return 'You already reached TYEE!';if(!/^[A-Z]{4}$/.test(word))return 'Enter exactly four letters.';if(word===path.at(-1))return 'Change one letter to make a new word.';if(!differs(path.at(-1),word))return 'Change exactly one letter. Keep the other three in place.';if(word!=='TYEE'&&!dictionary.has(word))return 'That word is not in the game dictionary. Try another.';return '';}
 function solution(word){if(!next.has(word))return [];const path=[word];while(path.at(-1)!=='TYEE')path.push(next.get(path.at(-1)));return path;}
 function dateKey(now=new Date()){return new Intl.DateTimeFormat('en-CA',{timeZone:'America/Los_Angeles',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);}
 function daily(now=new Date()){const key=dateKey(now);const day=Math.floor(Date.parse(key+'T00:00:00Z')/86400000);return {key,start:dailyPool[((day%dailyPool.length)+dailyPool.length)%dailyPool.length]};}
 function restore(start,saved){if(!Array.isArray(saved)||saved[0]!==start)return [start];const path=[start];for(const word of saved.slice(1)){if(typeof word!=='string'||validate(path,word))return [start];path.push(word);}return path;}
 return {dictionary,differs,distance,puzzles,dailyPool,validate,solution,dateKey,daily,restore};
}
if(typeof module!=='undefined')module.exports={createEngine};else root.createTyeeEngine=createEngine;
})(globalThis);

