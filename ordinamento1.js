let n =[1,5,7,8,4,3,6,10,15,3,3];

 function ordinamento (){ //.sort ordinamento crescente/ reverse ordinamento decresciente
    app=0;
    for (i=0; i<n.length;i++){   //posizione 1=i
        for(k=i+1;k<n.length;k++){   //posizione 2=k
            if(n[k]<n[i]){ //simbolo per crescente o descrescente 
                   app=n[i];
                   n[i]=n[k];
                   n[k]=app;
            }
        }
    }
            for(i=0; i<n.length;i++)
            console.log(n[i]);
            return n[i];
            }
            ordinamento();
            