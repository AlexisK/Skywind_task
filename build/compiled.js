function StateSave(){localStorage.state=JSON.stringify(STORAGE)}function LoadState(){try{STORAGE=JSON.parse(localStorage.state)}catch(i){}}function inherit(i,e){return this._inherits&&-1==this._inherits.indexOf(i)?(i.apply(this,e),void this._inherits.push(i)):0}function getSelf(i){return i._inherits=i._inherits||[],i.inherit=inherit,i}function BaseModel(){getSelf(this)}function Parking(){var i=getSelf(this);i.inherit(BaseModel),i.init=function(){},i.addSlots=function(i,e,n){},i.register=function(i){},i.restoreState=function(){},i.saveState=function(){},i.yieldState=function(){},i.init()}function Tag(i){TAG[i]=this}function Vehicle(i){var e=getSelf(this);e.inherit(BaseModel),e.init=function(){},e.copy=function(){},e.init()}function declareInstances(){"Truck,Sedan,Disabled".split(",").map(function(i){new Tag(i)}),window.parking=new Parking,parking.addSlots("Trucks",10,[TAG.Truck,TAG.Disabled,TAG.Sedan]),parking.addSlots("Disabled",5,[TAG.Sedan]),parking.addSlots("Simple",15,[TAG.Disabled,TAG.Sedan]),window.dummy_Truck=new Vehicle([TAG.Truck]),window.dummy_Sedan=new Vehicle([TAG.Sedan]),window.dummy_Disabled=new Vehicle([TAG.Disabled])}function mainScenario(){parking.restoreState(),parking.yieldState(),parking.register(dummy_Sedan.copy()),parking.register(dummy_Sedan.copy()),parking.register(dummy_Disabled.copy()),parking.register(dummy_Truck.copy()),parking.yieldState()}window.STORAGE={},window.TAG={},declareInstances(),mainScenario();