function TaskService(){
  this.getListTask=function(){
    return  axios({
      url:'https://5f5c7a365e3a4d0016249439.mockapi.io/api/task',
      method: 'GET',
    })
    
  }
  this.removeTask=function(id){
    return  axios({
      url:`https://5f5c7a365e3a4d0016249439.mockapi.io/api/task/${id}`,
      method: 'DELETE',
    })
  }
  this.addTask=function(task){
    return axios({
      url:'https://5f5c7a365e3a4d0016249439.mockapi.io/api/task',
      method: 'POST',
      data: task,
    })
  }
  this.getTaskById=function(id){
    return  axios({
      url:`https://5f5c7a365e3a4d0016249439.mockapi.io/api/task/${id}`,
      method: 'GET',
    })
  }
  this.updateTask=function(id,task){
    return  axios({
      url:`https://5f5c7a365e3a4d0016249439.mockapi.io/api/task/${id}`,
      method: 'PUT',
      data: task
    })
  }
}