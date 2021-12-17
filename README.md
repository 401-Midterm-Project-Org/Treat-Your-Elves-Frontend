# Treat Your Elves

Collaborators: Justin Hamerly, Katy Roffe, Joe Ivans, Tray Chea

## Overview

Treat your elves is a web app used for managing secret santa parties.  A group admin can create a group, add members to that group, and initiate a function to randomize the secret santa pairings.  

Features to be included are a user friendly interface for managing your group, managing your personal wishlist, and a notification system for secret santa deadlines.

---

## User Stories

### WISHLIST

As a group member I want to be able to add items to my wishlist for my secret santa to view  

*Feature Tasks:*  

* User can add an item to their wishlist
* All users in the group will be able to view all user wishlist

*Acceptance:*

* When the user searches for an item, they can click an add button, and the item will be added to their wishlist in a database  
* When a group member is logged in they will see the wishlist of their secret gift recipient

### CREATE A GROUP

As a group administrator I want to be able to add my group members to the secret santa event

*Feature tasks:*

* Admin can create a group and add users to the group
* Admin has privileges to add and remove members  
* Users cannot add members/can request invitation for new members

*Acceptance:*

* The admin has an interface for adding and removing members
* When members are added or removed, the group member list will update
* Users have a request button, and when they request an add to the group, the admin will receive a request to approve or deny the request

### SECRET SANTA ASSIGNMENT

As a group admin, I want to be able to randomly assign everyone in the group a unique member of the group as their secret santa

*Feature tasks:*

* Each member of the group is assigned a unique secret santa
* There are no duplicate secret santas
* You will not be assigned yourself as your secret santa

*Acceptance:*

* Group members will each be assigned a random secret santa using an array
  * This will ensure that each member is tied to another unique member
  * The member on the end of the linked list will be linked to index[0] of the array

### PERSISTING DATABASE

As a secret santa, I want to be able to revisit the app to view any updates or changes made to my assigned partner

*Feature Tasks:*

* Wishlists will be stored on a PostreSQL database
* The database can receive CRUD requests to make changes and view wishlists

*Acceptance:*

* When doing CRUD requests, the PostreSQL database will reflect the changes
* Status messages will be sent back upon successful/unsuccessful database requests

### USER FRIENDLY INTERFACE

As a group participant, I want to easily be able to view my gift recipients wishlist, as well as be able to add items to my own wishlist.

*Feature Tasks:*

* items will be displayed in a user interface with clear buttons for different functions (adding items, viewing items etc)*

*Acceptance:*

* When interacting with buttons for adding, viewing and removing wishlist items, the behavior is expected and clear

### INTERFACE FOR GROUP ADMIN

As my secret santa group's admin, I want to easily be able to send out notifications to my group, as well as easily be able to initiate the secret santa pairing

*Feature Tasks:*

* implement button for initiating secret santa pairings *
* implement interface for notifications - deadline for getting items *

*Acceptance:*

* When interacting with buttons for creating secret santa pairings, some sort of confirmation is given to the admin, and a notification is sent to group members telling them their secret gift recipient *
* when the admin pushes for a notification to be sent out, the group members receive that notification *
