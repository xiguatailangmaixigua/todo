
'use strict';
 angular.module('mytodoApp',[])
 .controller('MainCtrl',function($scope){
 	$scope.todos=[];
 	$scope.active=[];
 	$scope.completed=[];
 	$scope.len=0;
 	$scope.allFlag=true;
 	$scope.activeFlag=false;
 	$scope.completeFlag=false;
 	$scope.doneAll=false;
 	//add todo
 	$scope.addTodo = function(){
 			$scope.doneAll=false;
 			$scope.todos.push({
 			content:$scope.todo,
 			isDone: false
 		});
 			$scope.active.push($scope.todo);
	 		$scope.todo='';
	 		$scope.len=$scope.active.length;
 	};
 	//remove a todo ,used when click remove button in todos list 
 	$scope.removeTodo1= function(index)
 	{
 		$scope.active.splice($scope.active.indexOf($scope.todos[index].content),1);
   		$scope.todos.splice(index,1);
   		$scope.len=$scope.active.length;
 	}
 	//complete a todo ,used when click the complete button in todo list
 	$scope.completeTodo1=function(index,element){
 		if($scope.todos[index].isDone){
 			$scope.completed.push($scope.todos[index].content);
 			$scope.active.splice($scope.active.indexOf($scope.todos[index].content),1);
 			$scope.len=$scope.active.length;	
 		}
 		else{
 			$scope.active.push($scope.todos[index].content);
 			$scope.completed.splice($scope.completed.indexOf($scope.todos[index].content),1);
 			$scope.len=$scope.active.length;
 		}
 	}
 	//remove a todoo ,used when click the remove button in ative list
 	 $scope.removeTodo2= function(index)
 	{	
		for(var i=0;i<$scope.active.length;i++){
			if($scope.todos[i].content==$scope.active[index]){
				$scope.todos.splice(i,1);
				break;
			}
		}
   		$scope.active.splice(index,1);
   		$scope.len=$scope.active.length;
 	}
 	//complete a todo when click the  complete button in active list
 	$scope.completeTodo2=function(index){
 			var j=0;
 			$scope.completed.push($scope.active[index]);
 			$scope.active.splice(index,1);
 			$scope.len=$scope.active.length;
 	}
 	$scope.showAll=function(){
 		$scope.allFlag=true;
	 	$scope.activeFlag=false;
	 	$scope.completeFlag=false;
 	}
 	$scope.showActive=function(){
 		$scope.allFlag=false;
	 	$scope.activeFlag=true;
	 	$scope.completeFlag=false;
	 	$scope.doneAll=false;
 	}
 	$scope.showComplete=function(){
 		$scope.allFlag=false;
	 	$scope.activeFlag=false;
	 	$scope.completeFlag=true;
	 	$scope.doneAll=false;
 	}
 	$scope.clearComplete= function(){
 		$scope.completed=[];
 	}
 	//choose all as completed
 	$scope.doneAllTodo = function(){
 		if($scope.doneAll){
	 		for(var i=0;i< $scope.todos.length;i++){
	 			$scope.todos[i].isDone=true;
	 			$scope.completed.push($scope.todos[i].content);
	 		}
	 		$scope.len=0;
	 		$scope.active=[];
 		}
 		else{
 			for(var i=0;i< $scope.todos.length;i++){
	 			$scope.todos[i].isDone=false;
	 			$scope.active.push($scope.todos[i].content);
	 			
	 		}
 			$scope.len=$scope.active.length;
 			$scope.completed=[];
 		}
 	}
 });
