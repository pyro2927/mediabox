# mediabox

Ansible scripts to automatically install:

* [CouchPotato](https://couchpota.to/)
* [Plex](https://plex.tv/)
* [PlexPy](https://github.com/drzoidberg33/plexpy)
* [Sickbeard](http://sickbeard.com/)
* [Sonarr](https://sonarr.tv/)
* [Transmission](http://www.transmissionbt.com/)

## Setup

Configure `provisioning/group_vars/all` with the tabs you want setup.  `icons` are taken from [FontAwesome](http://fontawesome.io/icons/).

### Virtual Machine

Included is a `Vagrantfile` that will allow the easy setup of everything on a virtual machine.  Run `vagrant up` and you're good to go!

### Other Machine

To target a different machine, copy `provisioning/hosts.example` to `provisioning/hosts` and update it with the information of your already setup machine.

    $ cd ./provisioning/
    $ ansible-playbook playbook.yml

*Note: these Ansible scripts assume they're targeting an Ubuntu machine*

## Access

[nginx](http://nginx.org/en/) is used to route requests easily via subdomain. `couch.`, `plex.`, `plexpy`, `sickbeard.`, `sonarr.` and `transmission.` subdomains allow you to access each service without having to remember what port they run on.

## Misc

### Migrating Plex

In the chance you are migrating a Plex server, there are some scripts that will help with [these instructions](https://support.plex.tv/hc/en-us/articles/201370363-Move-an-Install-to-Another-System).