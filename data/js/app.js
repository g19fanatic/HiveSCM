
var TicketActionEnum = Object.freeze({
  OPENED:"OPENED",
  ASSIGNED:"ASSIGNED",
  UPDATED:"UPDATED",
  CLOSED:"CLOSED"
});

function TicketHistory() {
  this.enteredOn = new Date();
  this.enteredBy = "";
  this.description = "";
  this.actionTaken = TicketActionEnum.UPDATED;
}

function Ticket() {
  this.id = 0;
  this.title = "";
  this.createdOn = new Date();
  this.createdBy = "";
  this.assignedTo = "";
  this.isOpen = true;
  this.labels=[];
  this.history=[];
}

function RepoConfig() {
  this.repoName="";
  this.repoDesc="";
}

var hiveApp = angular.module("hiveApp", ['ngRoute']);
