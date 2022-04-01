function timeman3(){
                //１つめの～時～～分
                const hour=document.getElementById("ji");
                document.getElementById("a").textContent=hour.value;
                
                const min=document.getElementById("hun");
                document.getElementById("b").textContent=min.value;
                //２つめの～時～～分
                const hour2=document.getElementById("ji2");
                document.getElementById("c").textContent=hour2.value;
                
                const min2=document.getElementById("hun2");
                document.getElementById("d").textContent=min2.value;
                //３つめの～時～～分
                const Rhour=document.getElementById("r-ji");
                document.getElementById("e").textContent=Rhour.value;
                
                const Rmin=document.getElementById("r-hun");
                document.getElementById("f").textContent=Rmin.value;
                //４つめの～時～～分
                const Rhour2=document.getElementById("r-ji2");
                document.getElementById("g").textContent=Rhour2.value;
                
                const Rmin2=document.getElementById("r-hun2");
                document.getElementById("h").textContent=Rmin2.value;
                
                const year=document.getElementById("C-year");
                document.getElementById("year").textContent=year.value;
                
                const month=document.getElementById("C-month");
                document.getElementById("month").textContent=month.value;
                
                const day=document.getElementById("C-day");
                document.getElementById("day").textContent=day.value;
            }