
Add-Type -AssemblyName System.Drawing

$sourcePath = "c:\Users\meliz\Desktop\CURSO_FOTOGRAFIA\WWW\public\assets\DanielRodrigues\SEMANA3.jpg"
$destPath = "c:\Users\meliz\Desktop\CURSO_FOTOGRAFIA\WWW\public\assets\DanielRodrigues\SEMANA3_optimized.jpg"

if (Test-Path $sourcePath) {
    Write-Host "Processing $sourcePath..."
    
    $img = [System.Drawing.Image]::FromFile($sourcePath)
    
    # Calculate new dimensions (max width 1200px)
    $maxWidth = 1200
    if ($img.Width -gt $maxWidth) {
        $newWidth = $maxWidth
        $newHeight = [int]($img.Height * ($newWidth / $img.Width))
        
        $resized = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $graph = [System.Drawing.Graphics]::FromImage($resized)
        
        # High quality settings
        $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graph.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graph.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graph.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        
        $graph.DrawImage($img, 0, 0, $newWidth, $newHeight)
        
        # Save manually with quality parameter
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatDescription -eq "JPEG" }
        $encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 85)
        
        $resized.Save($destPath, $codec, $encParams)
        
        $resized.Dispose()
        $graph.Dispose()
        Write-Host "Created optimized image at $destPath"
    } else {
        # If it's already small, just copy it but maybe compress? 
        # For simplicity, if small, we just copy, but 25MB implies huge dimensions or raw data.
        Copy-Item $sourcePath $destPath
        Write-Host "Image was small enough, copied."
    }
    
    $img.Dispose()
} else {
    Write-Error "Source file not found!"
}
