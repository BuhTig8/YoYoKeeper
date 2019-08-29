#  WFWatchSDK

## Installation

copy WFWatchSDK.framework to your workspace

## Usage

### BlueToothManager

```#import <WFWatchSDK/WFWatchSDK.h>

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
