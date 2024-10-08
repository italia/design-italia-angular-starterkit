#/bin/bash

# Ottieni il nome dell'utente corrente
USER=$(whoami)

# Controlla se il nome utente è "node"
if [ "$USER" == "node" ]; then
    echo "Set node_modules permission"
    sudo chown -R node:node node_modules
    echo "Set node_modules permission: done"
fi

echo "Installing deps"
npm i
echo "Installing deps: done"