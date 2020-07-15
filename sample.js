import { Observable, combineLatest } from "rxjs";
import { map, takeLast, filter } from "rxjs/operators";

const sourceA$ = new Observable(observer => {
  setTimeout(() => {
    observer.next(1); // 1 emit
  }, 0);
  setTimeout(() => {
    observer.next(2); // 2 emit
  }, 1000);
  setTimeout(() => {
    observer.next(3); // 3 emit
  }, 2000);
  setTimeout(() => {
    observer.next(4); // 4 emit
  }, 2000);
}).pipe(
  map(event => event * event), // 1, 4, 9, 16
  filter(event => event % 2), // 4, 16
  takeLast(1) // 16
);

const sourceB$ = new Observable(observer => {
  setTimeout(() => {
    observer.next("Hello");
  }, 200);
  setTimeout(() => {
    observer.next("Hello, World!");
  }, 3000);
});

function render(event) {
  console.log(event);
  // document.getElementById("app").innerHTML = event;
}

combineLatest(sourceA$, sourceB$).subscribe(render);
