const dataset = {
    tasks: {
      "task-1": { id: "task-1", image:"https://i.insider.com/599daef4614d7949178b48e9?width=750&format=jpeg&auto=webp", content: " task 1",cont: "Content for task 1"  },
      "task-2": { id: "task-2", image:"https://oecdenvironmentfocusblog.files.wordpress.com/2020/06/wed-blog-shutterstock_1703194387_low_nwm.jpg?w=640", content: "task 2",cont: "Content for task 2"},
      "task-3": { id: "task-3", image:"https://cdn.powerofpositivity.com/wp-content/uploads/2020/05/quotes-about-self-love-1600x900.jpg", content: "task 3",cont: "Content for task 3" },
      "task-4": { id: "task-4", image:"https://i.pinimg.com/564x/ac/55/6a/ac556aaf712b70a2d8552c4ac8879a0d.jpg", content: "task 4",cont: "Content for task 4" },
      "task-5": { id: "task-5", image:"https://tr-images.condecdn.net/image/LDM0pgM40l1/crop/2040/f/gettyimages-1146431497.jpg", content: "task 5",cont: "Content for task 5" },
      "task-6": { id: "task-6", image:"https://media.wired.com/photos/5d09594a62bcb0c9752779d9/125:94/w_1994,h_1500,c_limit/Transpo_G70_TA-518126.jpg", content: "task 6",cont: "Content for task 6" },
      "task-7": { id: "task-7", image:"https://newsmeter.in/h-upload/2021/01/19/291251-beautiful-sakura.webp", content: "task 7",cont: "Content for task 7" },
      "task-8": { id: "task-8", image:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/08/11/15/dwayne-johnson.jpg?width=982&height=726&auto=webp&quality=75", content: "task 8",cont: "Content for task 8" },
      "task-9": { id: "task-9", image:"https://i.pinimg.com/originals/68/ef/f9/68eff90ee568c309282654894b2814ca.jpg", content: "task 9",cont: "Content for task 9" }
    },
    columns: {
      "column-1": { id: "column-1", title: "Todo", taskIds: ['task-1','task-5','task-6','task-7']},
      "column-2": { id: "column-2", title: "In progress", taskIds: ['task-2', 'task-3',"task-4",'task-9'] },
      "column-3": { id: "column-3", title: "Review", taskIds:['task-8'] },
      "column-4": { id: "column-4", title: "Completed", taskIds: [] }
  },
  columnOrder: ["column-1", "column-2", "column-3", "column-4"]}
  export default dataset