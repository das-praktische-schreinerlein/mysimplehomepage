# Install MySimpleHomePage

## prepare

### prepare build-scripts
- build-dev.bash, build-beta.bash, build-prod.bash, build-viewer.bash, build-mdpad.bash
```bash
#!/usr/bin/env bash

WORKSPACE="/cygdrive/f/Projekte/"
MYCMSPROJECT="mysimplehomepage"
```

### prepare src-directory
```bash
npm prune && npm install
``` 

## Build dev
Run for the dev-versions in `dist/`.
```bash
bash
./build-dev.bash
```

## Run scripts to initially reset database-passwords...
```bash
npm run backend-prepare-appenv-beforebuild
```

## Build beta
Run for the beta-versions in `dist/`.
```bash
bash
./build-beta.bash
```

## Build prod
Run for the prod-versions in `dist/`. 
```bash
bash
./build-prod.bash
```

## Build mdpad
Run for the mdpad-versions in `dist/`.
```bash
bash
./build-mdpad.bash
```

## Build viewer
Run for the viewer-versions in `dist/`.
```bash
bash
./build-viewer.bash
```

## Deploy prod
Stop backend via startscript
```bash
/etc/init.d/myshp start
/etc/init.d/myshp-frontend start
```

Copy startscript `installer/linux/init.d/myshp*` to `/etc/init.d/` and change paths.

Copy files to server
```
package-dist.json
dist
config
error_docs
```

Copy files on server to `$APPDIR`
```bash
cd $APPDIR
rm -fr dist
mv $IMPORTDIR/dist $APPDIR

rm -fr config
mv $IMPORTDIR/config $APPDIR

rm -fr error_docs
mv $IMPORTDIR/error_docs $APPDIR

rm -fr package.json 
mv $IMPORTDIR/package-dist.json $APPDIR/package.json
```

Install packages
```bash
cd $APPDIR
npm install 
```

On first install - Run scripts to initially reset passwords per environment
```bash
npm run backend-prepare-appenv-afterinstall-dev
npm run backend-prepare-appenv-afterinstall-beta
npm run backend-prepare-appenv-afterinstall-prod
```

On update - Run scripts to reset passwords per environment
```bash
npm run backend-prepare-appenv-afterupdate-dev
npm run backend-prepare-appenv-afterupdate-beta
npm run backend-prepare-appenv-afterupdate-prod
```

Set permissions and rights für `$APPDIR`

Start backend via startscript
```bash
/etc/init.d/myshp start
/etc/init.d/myshp start-frontend
```
