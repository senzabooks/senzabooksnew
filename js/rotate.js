const image = document.getElementById("main-img");
let degrees = 0;
image.addEventListener("click", () => {
  degrees += 360;
  image.style.transform = `rotate(${degrees}deg)`;
});

/*
_______    ______  ________   ______  ________  ______   ______   __    __                                                          
|       \  /      \|        \ /      \|        \|      \ /      \ |  \  |  \                                                         
| •••••••\|  ••••••\\••••••••|  ••••••\\•••••••• \••••••|  ••••••\| ••\ | ••                                                         
| ••__| ••| ••  | ••  | ••   | ••__| ••  | ••     | ••  | ••  | ••| •••\| ••                                                         
| ••    ••| ••  | ••  | ••   | ••    ••  | ••     | ••  | ••  | ••| ••••\ ••                                                         
| •••••••\| ••  | ••  | ••   | ••••••••  | ••     | ••  | ••  | ••| ••\•• ••                                                         
| ••  | ••| ••__/ ••  | ••   | ••  | ••  | ••    _| ••_ | ••__/ ••| •• \••••                                                         
| ••  | •• \••    ••  | ••   | ••  | ••  | ••   |   •• \ \••    ••| ••  \•••                                                         
 \••   \••  \••••••    \••    \••   \••   \••    \••••••  \••••••  \••   \••                                                         
                                                                                                                                     
                                                                                                                                     
                                                                                                                                     
 ________  __    __   ______   __    __  __    __   ______         ________   ______         __     __  __         ______   _______  
|        \|  \  |  \ /      \ |  \  |  \|  \  /  \ /      \       |        \ /      \       |  \   |  \|  \       /      \ |       \ 
 \••••••••| ••  | ••|  ••••••\| ••\ | ••| •• /  ••|  ••••••\       \••••••••|  ••••••\      | ••   | ••| ••      |  ••••••\| •••••••\
   | ••   | ••__| ••| ••__| ••| •••\| ••| ••/  •• | ••___\••         | ••   | ••  | ••      | ••   | ••| ••      | ••__| ••| ••  | ••
   | ••   | ••    ••| ••    ••| ••••\ ••| ••  ••   \••    \          | ••   | ••  | ••       \••\ /  ••| ••      | ••    ••| ••  | ••
   | ••   | ••••••••| ••••••••| ••\•• ••| •••••\   _\••••••\         | ••   | ••  | ••        \••\  •• | ••      | ••••••••| ••  | ••
   | ••   | ••  | ••| ••  | ••| •• \••••| •• \••\ |  \__| ••         | ••   | ••__/ ••         \•• ••  | ••_____ | ••  | ••| ••__/ ••
   | ••   | ••  | ••| ••  | ••| ••  \•••| ••  \••\ \••    ••         | ••    \••    ••          \•••   | ••     \| ••  | ••| ••    ••
    \••    \••   \•• \••   \•• \••   \•• \••   \••  \••••••           \••     \••••••            \•     \•••••••• \••   \•• \••••••• 
                                                                                                                                     
                                                                                                                                     
                                                                                                                                     
  ______   __       __  ________  __        ______   ______   __    __  ________  __    __  __    __   ______                        
 /      \ |  \     /  \|        \|  \      |      \ /      \ |  \  |  \|        \|  \  |  \|  \  /  \ /      \                       
|  ••••••\| ••\   /  ••| ••••••••| ••       \••••••|  ••••••\| ••\ | ••| ••••••••| ••\ | ••| •• /  ••|  ••••••\                      
| ••  | ••| •••\ /  •••| ••__    | ••        | ••  | ••__| ••| •••\| ••| ••__    | •••\| ••| ••/  •• | ••  | ••                      
| ••  | ••| ••••\  ••••| ••  \   | ••        | ••  | ••    ••| ••••\ ••| ••  \   | ••••\ ••| ••  ••  | ••  | ••                      
| ••  | ••| ••\•• •• ••| •••••   | ••        | ••  | ••••••••| ••\•• ••| •••••   | ••\•• ••| •••••\  | ••  | ••                      
| ••__/ ••| •• \•••| ••| ••_____ | ••_____  _| ••_ | ••  | ••| •• \••••| ••_____ | •• \••••| •• \••\ | ••__/ ••                      
 \••    ••| ••  \• | ••| ••     \| ••     \|   •• \| ••  | ••| ••  \•••| ••     \| ••  \•••| ••  \••\ \••    ••                      
  \••••••  \••      \•• \•••••••• \•••••••• \•••••• \••   \•• \••   \•• \•••••••• \••   \•• \••   \••  \••••••       */
