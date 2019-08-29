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
### WFDecompression -- Extract the data from ble device

you can use *WFDecompression* like this
```
[[WFDecompression shareDecompression] hexdatareceivediffWithRecvData:data signal:2 completedBlock:^(NSArray * _Nonnull ppg1Array, NSArray * _Nonnull ecgArray, NSArray * _Nonnull ecgArray2) {
        
}];
```
### WFFilter -- filter the input data to better data

you can use *WFDecompression* like this
```
NSArray *filterData = [[WFFilter filter] filterWithInputArray:inputData];
```
## License

## Contact
