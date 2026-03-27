$ErrorActionPreference = "Stop"

$node = "C:\Program Files\nodejs\node.exe"
$sharpModule = "C:\Users\NG By ROG\AppData\Roaming\npm\node_modules\sharp-cli\node_modules\sharp"
$projectRoot = "C:\Users\NG By ROG\Desktop\FLA-Web"
$imagesRoot = Join-Path $projectRoot "public\images"

$script = @"
const sharp = require(process.argv[1]);
const input = process.argv[2];
const output = process.argv[3];
const quality = Number(process.argv[4]);

sharp(input)
  .webp({ quality, effort: 6 })
  .toFile(output)
  .then((info) => {
    console.log(JSON.stringify({ output, ...info }));
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
"@

Get-ChildItem -Path $imagesRoot -Recurse -File | Where-Object {
  $_.Extension -match '^\.(png|jpe?g)$'
} | ForEach-Object {
  $inputPath = $_.FullName
  $outputPath = [System.IO.Path]::ChangeExtension($inputPath, ".webp")

  $quality = 75
  if ($_.Length -ge 5000000) {
    $quality = 70
  } elseif ($_.Length -ge 1500000) {
    $quality = 72
  }

  Write-Host "Converting: $inputPath -> $outputPath (q=$quality)"
  & $node -e $script $sharpModule $inputPath $outputPath $quality
  Write-Host "Created: $(Test-Path $outputPath)"
}
