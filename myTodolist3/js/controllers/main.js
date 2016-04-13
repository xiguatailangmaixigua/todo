
'use strict';
 angular.module('mytodoApp',[])
 .controller('MainCtrl',function($scope){
 	$scope.todoSet = [];
 	$scope.activeSet = [];
 	$scope.completedSet = [];
 	$scope.activeLen = 0;
 	$scope.doneAll = false;
 	$scope.type = 'all';

 	$scope.addTodo = function() {

 		$scope.doneAll = false;
 		$scope.todoSet.push({
 			content: $scope.todo,
 			isDone: false
 		});
 			$scope.activeSet.push($scope.todo);
	 		$scope.todo = '';
	 		$scope.activeLen = $scope.activeSet.length;
 	};

 	$scope.removeTodo = function(event) {  
 	
 		var deleteNum = event.target.parentNode.parentNode.firstElementChild.firstChild.nodeValue;
   		var i;
   		for (i=0;i<$scope.todoSet.length;i++) {
   			if ($scope.todoSet[i].content==deleteNum) {
   				$scope.todoSet.splice($scope.todoSet[i],1);
   				break;
   			}
   		}
   		$scope.activeSet.splice($scope.activeSet.indexOf(deleteNum),1);
   		$scope.completedSet.splice($scope.completedSet.indexOf(deleteNum),1);
   		$scope.activeLen = $scope.activeLen-1;
 	};
 	
 	$scope.completeTodo = function(event,status) {

 		var deleteNum = event.target.parentNode.parentNode.firstElementChild.firstChild.nodeValue;
   		var i;

   		$scope.activeSet = [];
   		$scope.completedSet = [];
    
   		if (status == 'active') {
   			for (i=0;i<$scope.todoSet.length;i++) {
   				if ($scope.todoSet[i].content == deleteNum) {
   					$scope.todoSet[i].isDone = true;
   					break;
   				}
   			}
   		}
  
   		for (i=0;i<$scope.todoSet.length;i++) {
   			if (!$scope.todoSet[i].isDone){
   				$scope.activeSet.push($scope.todoSet[i].content);		
   			}
   			else {
   				$scope.completedSet.push($scope.todoSet[i].content);
   			}
   		}
   		$scope.activeLen = $scope.activeSet.length;
 	};

 	$scope.changeListType = function(thisType) {

 		$scope.type = thisType;
 	}

 	$scope.clearComplete = function() {

 		var i;

 		for (i=0;i<$scope.todoSet.length;i++) {
   			if ($scope.todoSet[i].isDone){
   				$scope.todoSet.splice(i,1);		
   			}
   		}
 		$scope.completedSet=[];
 	}
 	//choose all as completedSet
 	$scope.doneAllTodo = function(){

 		if ($scope.doneAll) {
	 		for (var i=0;i< $scope.todoSet.length;i++) {
	 			$scope.todoSet[i].isDone = true;
	 			$scope.completedSet.push($scope.todoSet[i].content);
	 		}
	 		$scope.activeLen = 0;
	 		$scope.activeSet = [];
 		}
 		else {
 			for (var i=0;i< $scope.todoSet.length;i++) {
	 			$scope.todoSet[i].isDone = false;
	 			$scope.activeSet.push($scope.todoSet[i].content);
	 			
	 		}
 			$scope.activeLen = $scope.activeSet.length;
 			$scope.completedSet = [];
 		}
 	}
 });
