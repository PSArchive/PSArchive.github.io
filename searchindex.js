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
   this[database_length++] = new SearchPage("index.html", "PSArchive Home", "www.psarchive.tk  www.psarchive.tk  Keeping your consoles alive!  www.psarchive.tk  www.psarchive.tk  WEBSITE UNDER CONSTRUCTION  PSArchive for the PSP v1.0 Released!  Visit http //www.psarchive.tk/downloads to get started  PSArchiveStore    Scan with CashApp to Donate!     ", "");
   this[database_length++] = new SearchPage("pcgui.html", "Untitled Page", "www.psarchive.tk  www.psarchive.tk  Keeping your consoles alive!  www.psarchive.tk  www.psarchive.tk  WEBSITE UNDER CONSTRUCTION   ", "");
   this[database_length++] = new SearchPage("downloads.html", "Untitled Page", "www.psarchive.tk  www.psarchive.tk  Keeping your consoles alive!  www.psarchive.tk  www.psarchive.tk  WEBSITE UNDER CONSTRUCTION             ", "");
   this[database_length++] = new SearchPage("psp.html", "Untitled Page", "         ", "");
   this[database_length++] = new SearchPage("pspsidecar.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("pspsidecaritems.html", "Untitled Page", "           ", "");
   this[database_length++] = new SearchPage("pspgui.html", "Untitled Page", "         ", "");
   this[database_length++] = new SearchPage("pspdownloads.html", "Untitled Page", "           ", "");
   this[database_length++] = new SearchPage("psplist.html", "Untitled Page", "                         ", "");
   this[database_length++] = new SearchPage("pspgtavcs.html", "Untitled Page", "             ", "");
   this[database_length++] = new SearchPage("pspgtalcs.html", "Untitled Page", "             ", "");
   this[database_length++] = new SearchPage("pspmotogp.html", "Untitled Page", "             ", "");
   this[database_length++] = new SearchPage("pspnfsmostwanted.html", "Untitled Page", "             ", "");
   this[database_length++] = new SearchPage("pspthesims2.html", "Untitled Page", "             ", "");
   this[database_length++] = new SearchPage("pspthesimpsonsgame.html", "Untitled Page", "             ", "");
   this[database_length++] = new SearchPage("pspmanhunt2.html", "Untitled Page", "             ", "");
   this[database_length++] = new SearchPage("pspmegamanmavhuntx.html", "Untitled Page", "             ", "");
   this[database_length++] = new SearchPage("pspmegamanpoweredup.html", "Untitled Page", "             ", "");
   this[database_length++] = new SearchPage("pspmedievilresurrection.html", "Untitled Page", "             ", "");
   this[database_length++] = new SearchPage("pspgodseaterburst.html", "Untitled Page", "             ", "");
   this[database_length++] = new SearchPage("pspacecombatxskies.html", "Untitled Page", "             ", "");
   this[database_length++] = new SearchPage("pspacecombatjointassault.html", "Untitled Page", "             ", "");
   this[database_length++] = new SearchPage("setup.html", "Untitled Page", "           ", "");
   this[database_length++] = new SearchPage("page1.html", "Untitled Page", "         ", "");
   this[database_length++] = new SearchPage("ps3.html", "", "                   ", "");
   this[database_length++] = new SearchPage("alldownloads.html", "Untitled Page", "Featured Downloads  All Downloads   ", "");
   this[database_length++] = new SearchPage("ps3list.html", "Untitled Page", "                                                                       ", "");
   this[database_length++] = new SearchPage("featured.html", "Untitled Page", "     ", "");
   this[database_length++] = new SearchPage("featuredlist.html", "Untitled Page", "     ", "");
   this[database_length++] = new SearchPage("classicscorner.html", "Untitled Page", "             ", "");
   return this;
}
