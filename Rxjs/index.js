//--------------------------Promise------------------------------
//--------------------------promise all--------------------------
//chỉ resolve khi tất cả promise hoàn thành, reject khi có 1 reject va chỉ reject 1 lần
// newPromise = [
//     Promise.resolve('resolve1'),
//     'resolve2', 
//     new Promise((resolve, reject) => setTimeout(resolve, 3000, 'resolve3')),
//     Promise.reject('rejected')
// ]

// Promise.all(newPromise)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((result) => {
//         console.log(result);
//     })

// const doST = (data1, data2) => {
//     console.log(`${data1} and ${data2}`);
// }
// setTimeout(doST, 1000, 'you', 'me');
//--------------------------Promise.allSettled--------------------------: Phương thức trả về Promise luôn được resolve khi tất cả các mảng promise trả về ở trạng thái settled (kể cả là thành công hay thất bại), vì vậy sẽ không rơi vào case bị reject
//luôn rơi vào then. kết quả trả về là 1 mảng:
// 0: {status: 'rejected', reason: 'reject1'}
// 1: {status: 'rejected', reason: 'reject2'}
// 2: {status: 'rejected', reason: 'reject3'}
// 3: {status: 'fulfilled', value: 'resolve1'}
// 4: {status: 'fulfilled', value: 'resolve2'}
// const allPromise = [
//     Promise.reject('reject1'),
//     Promise.reject('reject2'),
//     Promise.reject('reject3'),
//     Promise.resolve('resolve1'),
//     Promise.resolve('resolve2')
// ];

// Promise.allSettled(allPromise)
//     .then((resolve) => {
//         console.log(resolve);
//     })

//     //never occur
//     .catch((reject) => {
//         console.log(reject);
//     })
//--------------------------Promise Race--------------------------: return then or catch, which return first
//cái nào nhanh nhất sẽ xử lý trước và chỉ sẽ xử lý 1 promise đó
// const promiseRace = [
//     new Promise((resolve, reject) => {setTimeout(reject, 4000, 'reject1')}),
//     new Promise((resolve, reject) => {setTimeout(reject, 5000, 'reject2')}),
//     new Promise((resolve, reject) => {setTimeout(resolve, 6000, 'resolve1')}),
// ];
// Promise.race(promiseRace)
//     .then((value) => {console.log(value)})
//     .catch((error) => {console.log(error)})
//--------------------------Promise Any------------------------------------------------------------------------------
//chỉ trả về 1 kq là resolve, và trả về thông báo 'AggregateError: All promises were rejected' khi tất cả reject
// const promiseAny = [
//     Promise.reject('reject1'),
//     Promise.reject('reject2'),
//     Promise.resolve('resolve1'),
//     Promise.resolve('resolve2'),
// ];

// Promise.any(promiseAny)
//     .then((resolve) => {console.log(resolve)})
//     .catch((reject) => {console.log(reject)})
//--------------------------Closures------------------------------------------------------------------------------
//--------------------------Promise.timeout------------------------------------------------------------------------------
// Promise.timeout = function(time) {
//     return new Promise((resolve) => {
//         console.log('kich hoat hay chua');
//         setTimeout(resolve, time);
//     })
// }
// const promiseObj = Promise.timeout(1000);//kích hoạt timer
// promiseObj
//     .then(() => {
//         console.log('time run');
//     })
// promiseObj
//     .then((resolve) => {console.log(resolve)});//chạy 1 lần
//--------------------------Observebale------------------------------------------------------------------------------
//resolve, reject, complete
// function Observable(funcWaitToRun) {
//     this.subscribe = funcWaitToRun;
// }

// Observable.timeout = function(miliseconds) {
//     function timeoutWaitToRun(next) {
//         setTimeout(() => {
//             next()
//         }, miliseconds);
//     }
//     return new Observable(timeoutWaitToRun);
// }

// const obsTimeout$ = Observable.timeout(1000);
// function next() {
//     console.log('next run')
// }
// obsTimeout$.subscribe(next)

function Observable(funcWaitToRun) {
    this.subscribe = funcWaitToRun;
}

Observable.timeout = function(miliseconds) {
    function timeoutWaitToRun(next) {
        setTimeout(() => {
            next();
        }, miliseconds,)
    }
    return new Observable(timeoutWaitToRun);
}
Observable.timeout(1000)
    .subscribe(() => {console.log('bao')})



// const observableỌbj = Observable.interval(1000); //chưa kích hoạt time
// observableỌbj
//     .subcribe((data) => {
//         console.log('Promise.timeout Data: ', data);//chạy nhiều lần
//     })