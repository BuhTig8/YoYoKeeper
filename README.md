#  WFWatchSDK

## Installation

Copy **WFWatchSDK.framework** to your workspace

## Usage

### BlueToothManager

you can use *BuleToothManager* like this

```
#import <WFWatchSDK/WFWatchSDK.h>

@interface ViewController ()<WFBlueToothManagerDelegate>
@property (strong, nonatomic) WFBlueToothManager *bleManager;
@end
@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.bleManager = [WFBlueToothManager shareManager];
    self.bleManager.delegate = self;
}
```

#### WFBlueToothManagerDelegate
```
/**
centralManagerDidUpdateState:

@param central The central manager whose state has changed.
*/
- (void)centralManagerDidUpdateState:(nonnull CBCentralManager *)central ;

/**
didDiscoverPeripheral:

@param manager WFBlueToothManager
@param discoveredPeripherals The peripheral list of discovered
*/
- (void)blueToothManager:(nullable WFBlueToothManager *)manager didDiscoverPeripheral:(nullable NSArray *)discoveredPeripherals;

/**
didConnectPeripheral:

@param manager WFBlueToothManager
@param peripheral The connected peripheral
*/
- (void)blueToothManager:(nullable WFBlueToothManager *)manager didConnectPeripheral:(nullable CBPeripheral *)peripheral;

/**
didFailToConnectPeripheral:

@param manager WFBlueToothManager
@param peripheral Connection failed peripheral
@param error fail error
*/
- (void)blueToothManager:(nullable WFBlueToothManager *)manager didFailToConnectPeripheral:(nullable CBPeripheral *)peripheral error:(nullable NSError *)error;

/**
didDisconnectPeripheral

@param manager WFBlueToothManager
@param peripheral Disconnected peripheral
@param error fail error
*/
- (void)blueToothManager:(nullable WFBlueToothManager *)manager didDisconnectPeripheral:(nullable CBPeripheral *)peripheral error:(nullable NSError *)error;

/**
didUpdateData:

@param peripheral The connected peripheral
@param data Accepted data
*/
- (void)peripheral:(nullable CBPeripheral *)peripheral didUpdateData:(nullable NSData *)data;
```
#### Public Method
```
/**
shareManager

@return +shareManager returns a global instance of WFBlueToothManager to control bluetooth.
*/
+ (instancetype)shareManager;

/**
isCentralPoweredOn

@return BOOL
*/
- (BOOL)isCentralPoweredOn;

/**
isConnected

@return BOOL
*/
- (BOOL)isConnected;


/**
start scan the peripherals
*/
- (void)startScan;

/**
stop scan the peripherals
*/
- (void)stopScan;


/**
connectPeripheral:

@param peripheral the peripheral you want connect
*/
- (void)connectPeripheral:(CBPeripheral *)peripheral;

/**
cancelPeripheralConnection
*/
- (void)cancelPeripheralConnection;


/**
getVoltageWithCompletedBlock:

@param completedBlock completedBlock
*/
- (void)getVoltageWithCompletedBlock:(void(^)(float voltage))completedBlock;


/**
openPPGAndECGSignal
*/
- (void)openPPGAndECGSignal;

/**
closePPGAndECGSignal
*/
- (void)closePPGAndECGSignal;

/**
updateTime
*/
- (void)updateTime;

/**
setWatchStyle

@param style WFWatchStyleAnalog or WFWatchStyleDigital
*/
- (void)setWatchStyle:(WFWatchStyle)style;
```

### WFExtracter -- Extract the data from ble device

you can use *WFExtracter* like this, and you must call it when you start measure
```
[[WFExtracter shareExtracter] hexdatareceivediffWithRecvData:data signal:2 completedBlock:^(NSArray *ppg1Array, NSArray *ecgArray, NSArray *filterecgArray) {
        
}];
```

#### Public Method
```
+ (instancetype)shareExtracter;
/**
initialize WFExtracter, and you must call it when you start measure
*/
- (void)initialize;
/**
Extract the data from ble device

@param recvdata the data received from ble device
@param signal 0:ppg only 1:ecg only 2:ppg and ecg
@param completedBlock if the ecg data`s count equal to 400,it will call back.
*/
- (void)hexdatareceivediffWithRecvData:(NSData *)recvdata signal:(int)signal completedBlock:(void(^)(NSArray *ppg1Array, NSArray *ecgArray, NSArray *filterecgArray))completedBlock;
```
### WFFilter -- filter the input data to better data

you can use *WFFilter* like this
```
NSArray *filterData = [[WFFilter filter] filterWithInputArray:inputData];
```

#### Public Method
```
+ (instancetype)filter;
/**
filter the input data to better data

@param inputData the original data`s count must be equal to 400, type: @(double)
@return 200 better data, type: @(double)
*/
- (NSArray *)filterWithInputArray:(NSArray *)inputData;
```
## License

## Contact
