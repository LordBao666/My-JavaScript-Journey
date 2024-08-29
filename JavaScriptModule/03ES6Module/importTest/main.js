document.querySelector("button").addEventListener("click", async (event)=>{
  const helloModule =  await import("./test.js");
  
  //具体处理
  event.target.textContent = helloModule.helloWorld();
}
);