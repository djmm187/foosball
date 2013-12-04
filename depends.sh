
#!/bin/bash

##
## fetch and unpack EXTJS source
##
_ROOT=$(git rev-parse --show-toplevel)

echo "Removing any lingering extjs source...";
cd ${_ROOT}"/assets/";
rm -Rf extjs/;
rm -f ext-4.2.1-gpl.zip;
echo "Fetching source...";
curl -O "http://cdn.sencha.com/ext/gpl/ext-4.2.1-gpl.zip";
echo "Unpacking source..."
unzip ext-4.2.1-gpl.zip;
mv ext-4.2.1.883 extjs;
rm ext-4.2.1-gpl.zip;
echo "Done..."