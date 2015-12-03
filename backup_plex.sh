#!/bin/bash
pushd /var/lib/plexmediaserver/Library/Application\ Support/Plex\ Media\ Server/
tar czf ~/plex_media_server_backup_$(date +%Y%m%d-%H%M%S).tar.gz .