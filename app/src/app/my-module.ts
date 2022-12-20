import { CommonModule } from "@angular/common";
import { Component, Inject, Injectable, ModuleWithProviders, NgModule, Optional, Provider } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";

class TheTestClass {
  constructor(private router: Router) { }
}
@Component({
  selector: 'app-test',
  template: `<div>HELLO</div>`
})
export class TestCmp {
  constructor(@Inject('Test') value: string) {
    console.log(value);
  }
}


@NgModule({
  declarations: [
    TestCmp
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestCmp,
    
  ]
})
export class MyModule {

  static forRoot(routers: Routes): ModuleWithProviders<RouterModule> {
    return {
      ngModule: RouterModule,
      providers: [
        {
          provide: 'MAIN_ROUTES',
          useValue: routers
        }
      ]
    };
  }

  static forChildren(routers: Routes): ModuleWithProviders<RouterModule> {
    return {
      ngModule: RouterModule,
      providers: [
        {
          provide: 'CHILD_ROUTES',
          useValue: routers
        }
      ]
    };
  }

  static withProviders(): ModuleWithProviders<MyModule> {
    return {
      ngModule: MyModule,
      providers: [
        {
          provide: 'Test',
          useValue: {}
        }
      ]
    }
  }
}