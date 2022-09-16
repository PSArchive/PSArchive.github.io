// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "Untitled Page", "PSFree Store  Navigate  Select  psfreepspc v1.0.0   youdontfooljesus  Is your favourite game not here?  Submit a request to reddit.com/ r/psfree   ", "");
   this[database_length++] = new SearchPage("globalsidecar.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("sidecaritems.html", "Untitled Page", "Grand Theft Au  PSP   MotoGP  PSP   Grand Theft Au  PSP    ", "");
   this[database_length++] = new SearchPage("gui.html", "Untitled Page", "PSFree Store  Navigate  Select  psfreepspc v1.0.0   youdontfooljesus   ", "");
   this[database_length++] = new SearchPage("PSP.html", "Untitled Page", "PSFree Store  Navigate  Select  psfreepspc v1.0.0   youdontfooljesus  Playstation Portable   ", "");
   this[database_length++] = new SearchPage("psplist.html", "Untitled Page", "Grand Theft Auto  Vi  PSP   MotoGP  PSP   Grand Theft Auto  Li  PSP   Need for Speed  Most  PSP   The Sims 2  PSP    ", "");
   this[database_length++] = new SearchPage("pspgtavcs.html", "Untitled Page", "PSFree Store  Navigate  Select  psfreepspc v1.0.0   youdontfooljesus  Grand Theft Auto  Vice City Stories PSP  Vice City, 1984 Opportunity abounds in a city emerging from the swamps, its growth fueled by a violent power struggle in a lucrative drug trade Construction is everywhere as a shining metropolis rises from foundations of crime and betrayal As a soldier, Vic Vance has always protected his dysfunctional family, his country, himself One bad decision later and that job is about to get much harder   ", "");
   this[database_length++] = new SearchPage("pspgtalcs.html", "Untitled Page", "PSFree Store  Navigate  Select  psfreepspc v1.0.0   youdontfooljesus  Grand Theft Auto  Liberty City Stories PSP  There are a million stories in Liberty City This one changes everything Once a trusted wise guy in the Leone crime family, Toni Cipriani was forced into hiding after killing a made man Now he's back and it's time for things to be put right   ", "");
   this[database_length++] = new SearchPage("pspmotogp.html", "Untitled Page", "PSFree Store  Navigate  Select  psfreepspc v1.0.0   youdontfooljesus  MotoGP PSP  MotoGP is a racing game released for the PlayStation Portable based on the 2005 and 2006 MotoGP seasons MotoGP was developed by Namco Bandai Games and was released in 2006 The game received average reviews with most critics focusing towards the graphics and gameplay Contents 1 Gameplay 2 Reception 3 References 4 External links Gameplay   ", "");
   this[database_length++] = new SearchPage("pspnfsmostwanted.html", "Untitled Page", "PSFree Store  Navigate  Select  psfreepspc v1.0.0   youdontfooljesus  Need for Speed  Most Wanted PSP  The player arrives in Rockport as a newbie to the local street racing scene Soon, the player becomes involved with the Blacklist, a list of the most notorious racers in Rockport, and proceeds to challenge Razor, the number 15 on the Blacklist   ", "");
   this[database_length++] = new SearchPage("thesims2.html", "Untitled Page", "PSFree Store  Navigate  Select  psfreepspc v1.0.0   youdontfooljesus  The Sims 2 PSP  The Sims 2  PSP  is the first of The Sims series for the PlayStation Portable system It takes place in Strangetown, but unlike the GBA and DS versions, the PSP version is based on the Windows version  the graphics are similar This is the only PSP Sims game that is minigame as well as mission based   ", "");
   this[database_length++] = new SearchPage("setup.html", "Untitled Page", "PSFree Store  Navigate  Select  psfreepspc v1.0.0   youdontfooljesus  On a PS3 system already set up to use PSFree or a PC/Mac, connect your PSP to the system with a memory card inserted via a Mini-USB cable Click on the links below and save the files to the 'seplugins' folder of your PSP  If it doesn't exist create it   Once all the files have been downloaded to the PSP, reboot it  You're all done! Pick a category from the above menu and download a game of your choosing Games should be saved to the ISO folder   ", "");
   return this;
}
