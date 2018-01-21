import {Directive, Input, SimpleChange, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[counterOf]'
})
export class CounterDirective {

  constructor(private container: ViewContainerRef, private  template: TemplateRef<Object>) {

  }

  @Input('counterOf')
  counter: number;

  ngOnChanges(changes: SimpleChange) {
    this.container.clear();
    for (let i = 0; i < this.counter; i++) {
      this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
    }
  }


}

class CounterDirectiveContext {
  constructor(public $implicit: any) {

  }

}
